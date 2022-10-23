import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import NumberInputSpinner from '..';
import { NumberInputSpinnerProps } from '..';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Molecules/Number Spinner',
  component: NumberInputSpinner,
  argTypes: { onChange: { action: 'update value' } },
};

export const NumberInputSpinnerSimpleComponent: ComponentStory<
  typeof NumberInputSpinner
> = (args: NumberInputSpinnerProps) => {
  return <NumberInputSpinner {...args} />;
};

NumberInputSpinnerSimpleComponent.storyName = 'Simple 1-10';
NumberInputSpinnerSimpleComponent.args = {
  increment: 1,
  min: 0,
  max: 10,
  value: 5,
  disabled: false,
  dataTestId: 'spinner',
};
NumberInputSpinnerSimpleComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inc = canvas.getByTestId('spinner-inc');
  const dec = canvas.getByTestId('spinner-dec');
  const output = canvas.getByTestId('spinner-textbox');

  // ensure default value
  expect(output).toHaveValue(5);

  // Make sure it can increment
  userEvent.click(inc);
  expect(output).toHaveValue(6);

  // Make sure it can decrement
  userEvent.click(dec);
  expect(output).toHaveValue(5);

  // Make sure it doesnt increase above 10
  userEvent.clear(output);
  userEvent.type(output, '10');
  expect(inc).toBeDisabled();

  // Make sure it doesnt decreate bellow  0
  userEvent.clear(output);
  userEvent.type(output, '0');
  expect(dec).toBeDisabled();

  // Make sure it shows error when forced to be outside of bounds
  userEvent.clear(output);
  userEvent.type(output, '11');
  expect(output).toBeInvalid();
  userEvent.clear(output);
  userEvent.type(output, '-1');
  expect(output).toBeInvalid();

  // Reset to initial value
  userEvent.clear(output);
  userEvent.type(output, '5');
};

export const NumberInputSpinnerLongComponent = (
  args: NumberInputSpinnerProps
) => <NumberInputSpinner {...args} />;

NumberInputSpinnerLongComponent.storyName = 'Long Number';
NumberInputSpinnerLongComponent.args = {
  ...NumberInputSpinnerSimpleComponent,
  max: 9999999,
  value: 9999999,
};
