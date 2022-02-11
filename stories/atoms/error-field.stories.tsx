import React from 'react';
import { ErrorField } from '../../src';

export default {
  title: 'Design System/Atoms/ErrorField',
  component: ErrorField,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: ['success', 'red'],
      },
    },
  },
};

export const ErrorComponent = args => <ErrorField {...args} />;

ErrorComponent.storyName = 'Error';
ErrorComponent.args = {
  error: 'Please insert valid name',
  color: 'red',
};

export const SuccessComponent = args => <ErrorField {...args} />;

SuccessComponent.storyName = 'Success';
SuccessComponent.args = {
  error: 'Name saved with success',
  color: 'success',
};
