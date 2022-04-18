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

describe(`${Toggle.name}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders as expected', () => {
    makeSut();

    expect(screen.getAllByRole('radio').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
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
    expect(screen.getAllByRole('radio').length).toBeGreaterThanOrEqual(2);
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

    // it is checked by default
    expect(labelOn).toBeChecked();

    // it sets to false
    userEvent.click(labelOff);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(labelOff).toBeChecked();
    expect(labelOn).not.toBeChecked();

    // it sets to true
    userEvent.click(labelOn);
    expect(mockOnClick).toBeCalledTimes(2);
    expect(labelOn).toBeChecked();
    expect(labelOff).not.toBeChecked();
  });

  it('is disable and does not allow interactivity', () => {
    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'Off',
      labelRight: 'On',
      disabled: true,
    });

    const labelOff = screen.getByRole('radio', { name: /off/i });
    const labelOn = screen.getByRole('radio', { name: /on/i });

    // it is checked by default
    expect(labelOn).toBeChecked();
    expect(labelOn).toBeDisabled();
    expect(labelOff).not.toBeChecked();
    expect(labelOff).toBeDisabled();

    // it tries setting it to false
    userEvent.click(labelOff);
    expect(mockOnClick).toBeCalledTimes(0);
    expect(labelOn).toBeChecked();
    expect(labelOn).toBeDisabled();
    expect(labelOff).not.toBeChecked();
    expect(labelOff).toBeDisabled();

    // it tries setting it to true
    userEvent.click(labelOn);
    expect(mockOnClick).toBeCalledTimes(0);
    expect(labelOn).toBeChecked();
    expect(labelOn).toBeDisabled();
    expect(labelOff).not.toBeChecked();
    expect(labelOff).toBeDisabled();
  });
});
