import React from 'react';
import ErrorField, { ErrorFieldProps } from '..';

export default {
  title: 'Components/Atoms/ErrorField',
  component: ErrorField,
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['success', 'red'],
    },
  },
};

export const ErrorComponent = (args: ErrorFieldProps) => (
  <ErrorField {...args} />
);

ErrorComponent.storyName = 'Error';
ErrorComponent.args = {
  error: 'Please insert valid name',
  color: 'red',
};

export const SuccessComponent = (args: ErrorFieldProps) => (
  <ErrorField {...args} />
);

SuccessComponent.storyName = 'Success';
SuccessComponent.args = {
  error: 'Name saved with success',
  color: 'success',
};
