import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Toggle from '..';
import { ToggleProps } from '../types';
import '@testing-library/jest-dom';

const mockOnClick = jest.fn();

const INITIAL_STATE: ToggleProps = {
  isLabelVisible: false,
  onClick: mockOnClick,
};
const makeSut = (args: ToggleProps = INITIAL_STATE) =>
  render(<Toggle {...args} />);

describe(`${Toggle.name} atom`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders as expected (without accessibility)', () => {
    makeSut();

    expect(screen.getAllByRole('radio').length).toEqual(2);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    expect(screen.getAllByRole('radio')[1]).not.toBeChecked();
  });

  it('supports accessibility', () => {
    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'Off',
      labelRight: 'On',
    });

    const labelOff = screen.getByRole('radio', { name: /off/i });
    const labelOn = screen.getByRole('radio', { name: /on/i });

    expect(labelOff).toBeInTheDocument();
    expect(labelOn).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toEqual(2);
  });

  it('activates/disactivates and invokes the onClick method', () => {
    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'Off',
      labelRight: 'On',
    });

    const labelOff = screen.getByRole('radio', { name: /off/i });
    const labelOn = screen.getByRole('radio', { name: /on/i });

    // it is not checked/activated by default
    expect(labelOff).toBeChecked();
    expect(labelOn).not.toBeChecked();

    // it tries do activate it (on)
    userEvent.click(labelOn);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledWith(true);
    expect(labelOn).toBeChecked();
    expect(labelOff).not.toBeChecked();

    // it tries to disactivate it (off)
    userEvent.click(labelOff);
    expect(mockOnClick).toBeCalledTimes(2);
    expect(mockOnClick).toBeCalledWith(false);
    expect(labelOff).toBeChecked();
    expect(labelOn).not.toBeChecked();
  });

  it('is disabled and does not allow interactivity', () => {
    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'Off',
      labelRight: 'On',
      disabled: true,
    });

    const labelOff = screen.getByRole('radio', { name: /off/i });
    const labelOn = screen.getByRole('radio', { name: /on/i });

    // it is not checked by default
    // and must be disabled
    expect(labelOn).not.toBeChecked();
    expect(labelOn).toBeDisabled();
    expect(labelOff).toBeChecked();
    expect(labelOff).toBeDisabled();

    // it tries do activate it (on)
    userEvent.click(labelOn);
    expect(mockOnClick).toBeCalledTimes(0);
    expect(labelOn).not.toBeChecked();
    expect(labelOn).toBeDisabled();
    expect(labelOff).toBeChecked();
    expect(labelOff).toBeDisabled();

    // it tries to disactivate it (off)
    userEvent.click(labelOff);
    expect(mockOnClick).toBeCalledTimes(0);
    expect(labelOn).not.toBeChecked();
    expect(labelOn).toBeDisabled();
    expect(labelOff).toBeChecked();
    expect(labelOff).toBeDisabled();
  });
});
