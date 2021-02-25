import React from 'react';
import NumberInputSpinner from '..';
import { NumberInputSpinnerProps } from '..';

export default {
  title: 'Design System/Molecules/Number Spinner',
  component: NumberInputSpinner,
};

export const NumberInputSpinnerSimpleComponent = (
  args: NumberInputSpinnerProps
) => {
  return <NumberInputSpinner {...args} />;
};

NumberInputSpinnerSimpleComponent.storyName = 'Simple 1-10';
NumberInputSpinnerSimpleComponent.args = {
  increment: 1,
  min: 0,
  max: 10,
  value: 5,
  onChange: (value: any) => console.log(value),
  disabled: false,
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
