import React from 'react';
import Error, { ErrorProps } from '..';

export default {
  title: 'Design System/Molecules/Error',
  component: Error,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'minimal'],
      },
    },
  },
};

export const ErrorComponent = (args: ErrorProps) => <Error {...args} />;

ErrorComponent.args = {
  variant: 'default',
  value: 'This is an awesome error',
};
