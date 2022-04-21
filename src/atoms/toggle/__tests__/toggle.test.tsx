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

  it('instatiates (n) numbers of components without clashing each other', () => {
    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'off',
      labelRight: 'on',
    });

    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'off2',
      labelRight: 'on2',
    });

    makeSut({
      ...INITIAL_STATE,
      isLabelVisible: true,
      labelLeft: 'off3',
      labelRight: 'on3',
    });

    const labelOff = screen.getByRole('radio', { name: 'off' });
    const labelOn = screen.getByRole('radio', { name: 'on' });

    const labelOff2 = screen.getByRole('radio', { name: 'off2' });
    const labelOn2 = screen.getByRole('radio', { name: 'on2' });

    const labelOff3 = screen.getByRole('radio', { name: 'off3' });
    const labelOn3 = screen.getByRole('radio', { name: 'on3' });

    ///#region Activating the states
    // it tries do activate it (on) - 1st
    userEvent.click(labelOn);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(labelOn).toBeChecked();
    expect(labelOff).not.toBeChecked();
    // checks if the other components state are intact
    expect(labelOn2).not.toBeChecked();
    expect(labelOff2).toBeChecked();
    expect(labelOn3).not.toBeChecked();
    expect(labelOff3).toBeChecked();

    // it tries do activate it (on) - 2nd
    userEvent.click(labelOn2);
    expect(mockOnClick).toBeCalledTimes(2);
    expect(labelOn2).toBeChecked();
    expect(labelOff2).not.toBeChecked();
    // checks if the other components state are intact
    expect(labelOn).toBeChecked();
    expect(labelOff).not.toBeChecked();
    expect(labelOn3).not.toBeChecked();
    expect(labelOff3).toBeChecked();

    // it tries do activate it (on) - 3rd
    userEvent.click(labelOn3);
    expect(mockOnClick).toBeCalledTimes(3);
    expect(labelOn3).toBeChecked();
    expect(labelOff3).not.toBeChecked();
    // checks if the other components state are intact
    expect(labelOn).toBeChecked();
    expect(labelOff).not.toBeChecked();
    expect(labelOn2).toBeChecked();
    expect(labelOff2).not.toBeChecked();
    ///#endregion

    ///#region Disabling the states
    // it tries do disactivate it (off) - 1st
    userEvent.click(labelOff);
    expect(mockOnClick).toBeCalledTimes(4);
    expect(labelOn).not.toBeChecked();
    expect(labelOff).toBeChecked();
    // checks if the other components state are intact
    expect(labelOn2).toBeChecked();
    expect(labelOff2).not.toBeChecked();
    expect(labelOn3).toBeChecked();
    expect(labelOff3).not.toBeChecked();

    // it tries do disactivate it (off) - 2nd
    userEvent.click(labelOff2);
    expect(mockOnClick).toBeCalledTimes(5);
    expect(labelOn2).not.toBeChecked();
    expect(labelOff2).toBeChecked();
    // checks if the other components state are intact
    expect(labelOn).not.toBeChecked();
    expect(labelOff).toBeChecked();
    expect(labelOn3).toBeChecked();
    expect(labelOff3).not.toBeChecked();

    // it tries do disactivate it (off) - 3rd
    userEvent.click(labelOff3);
    expect(mockOnClick).toBeCalledTimes(6);
    expect(labelOn3).not.toBeChecked();
    expect(labelOff3).toBeChecked();
    // checks if the other components state are intact
    expect(labelOn).not.toBeChecked();
    expect(labelOff).toBeChecked();
    expect(labelOn2).not.toBeChecked();
    expect(labelOff2).toBeChecked();
  });
});
