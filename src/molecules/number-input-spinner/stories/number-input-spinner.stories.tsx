import React from 'react';
import NumberInputSpinner from '..';
import { NumberInputSpinnerProps } from '..';

export default {
  title: 'Design System/Molecules/Number Spinner',
  component: NumberInputSpinner,
};

export const NumberInputSpinnerComponent = (args: NumberInputSpinnerProps) => (
  <NumberInputSpinner value={10} {...args} />
);

NumberInputSpinnerComponent.storyName = 'Number Spinner';
NumberInputSpinnerComponent.args = {
  disabled: false,
};
