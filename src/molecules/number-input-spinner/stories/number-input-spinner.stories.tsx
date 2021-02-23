import React from 'react';
import NumberInputSpinner from '..';
import { NumberInputSpinnerProps } from '..';

export default {
  title: 'Design System/Molecules/Number Spinner',
  component: NumberInputSpinner,
};

export const NumberInputSpinnerComponent = (args: NumberInputSpinnerProps) => (
  <NumberInputSpinner {...args} />
);

NumberInputSpinnerComponent.storyName = 'Number Spinner';
NumberInputSpinnerComponent.args = {
  increment: 1,
  min: 0,
  max: 10,
  value: 5,
  disabled: false,
};
