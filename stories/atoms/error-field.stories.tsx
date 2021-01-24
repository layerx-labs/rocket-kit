import React from 'react';
import { ErrorField } from '../../src';

export default {
  title: 'Design System/Atoms/ErrorField',
  component: ErrorField,
  argTypes: {
    variant: {
      color: {
        type: 'select',
        options: ['success', 'danger'],
      },
    },
  },
};

export const ErrorComponent = args => <ErrorField {...args} />;

ErrorComponent.args = {
  error: 'Please insert valid name',
  color: 'danger',
};

export const SuccessComponent = args => <ErrorField {...args} />;

SuccessComponent.args = {
  error: 'Name saved with success',
  color: 'success',
};
