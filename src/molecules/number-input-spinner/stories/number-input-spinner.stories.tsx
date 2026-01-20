import React, { useState } from 'react';
import NumberInputSpinner from '..';
import { NumberInputSpinnerProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Molecules/Number Spinner',
  component: NumberInputSpinner,
};

export const NumberInputSpinnerSimpleComponent = (
  args: NumberInputSpinnerProps
) => {
  const [value, setValue] = useState(args.value);

  return (
    <NumberInputSpinner
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue);
      }}
    />
  );
};

NumberInputSpinnerSimpleComponent.storyName = 'Simple 1-10';
NumberInputSpinnerSimpleComponent.args = {
  increment: 1,
  min: 0,
  max: 10,
  value: 5,
  disabled: false,
  onChange: fn(),
};
NumberInputSpinnerSimpleComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: NumberInputSpinnerProps }) => {
  const canvas = within(canvasElement);

  // Verify the input exists with initial value
  const input = canvas.getByRole('spinbutton') as HTMLInputElement;
  await expect(input).toBeInTheDocument();
  await expect(input).toHaveValue(5);

  // Find increment and decrement buttons
  const buttons = canvas.getAllByRole('button');
  const decrementButton = buttons[0];
  const incrementButton = buttons[1];

  // Click increment button
  await userEvent.click(incrementButton);
  await expect(input).toHaveValue(6);
  await expect(args.onChange).toHaveBeenCalled();

  // Click decrement button
  await userEvent.click(decrementButton);
  await expect(input).toHaveValue(5);
};

export const NumberInputSpinnerMinMaxComponent = (
  args: NumberInputSpinnerProps
) => {
  const [value, setValue] = useState(args.value);

  return (
    <NumberInputSpinner
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

NumberInputSpinnerMinMaxComponent.storyName = 'Min/Max Bounds';
NumberInputSpinnerMinMaxComponent.args = {
  increment: 1,
  min: 0,
  max: 3,
  value: 0,
  disabled: false,
};
NumberInputSpinnerMinMaxComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByRole('spinbutton') as HTMLInputElement;
  const buttons = canvas.getAllByRole('button');
  const decrementButton = buttons[0];
  const incrementButton = buttons[1];

  // Should be at min (0) - decrement should not go below
  await expect(input).toHaveValue(0);

  // Increment to max
  await userEvent.click(incrementButton);
  await userEvent.click(incrementButton);
  await userEvent.click(incrementButton);
  await expect(input).toHaveValue(3);

  // Try to go above max - should stay at 3
  await userEvent.click(incrementButton);
  await expect(input).toHaveValue(3);
};

export const NumberInputSpinnerLongComponent = (
  args: NumberInputSpinnerProps
) => {
  const [value, setValue] = useState(args.value);

  return (
    <NumberInputSpinner
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

NumberInputSpinnerLongComponent.storyName = 'Long Number';
NumberInputSpinnerLongComponent.args = {
  increment: 1,
  min: 0,
  max: 9999999,
  value: 9999999,
  disabled: false,
};
NumberInputSpinnerLongComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByRole('spinbutton') as HTMLInputElement;
  await expect(input).toHaveValue(9999999);

  // Verify it displays correctly
  const buttons = canvas.getAllByRole('button');
  const decrementButton = buttons[0];

  // Decrement from max
  await userEvent.click(decrementButton);
  await expect(input).toHaveValue(9999998);
};

export const NumberInputSpinnerDisabledComponent = (
  args: NumberInputSpinnerProps
) => <NumberInputSpinner {...args} />;

NumberInputSpinnerDisabledComponent.storyName = 'Disabled';
NumberInputSpinnerDisabledComponent.args = {
  increment: 1,
  min: 0,
  max: 10,
  value: 5,
  disabled: true,
};
NumberInputSpinnerDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the input is disabled
  const input = canvas.getByRole('spinbutton') as HTMLInputElement;
  await expect(input).toBeDisabled();

  // Verify buttons are disabled
  const buttons = canvas.getAllByRole('button');
  await expect(buttons[0]).toBeDisabled();
  await expect(buttons[1]).toBeDisabled();
};
