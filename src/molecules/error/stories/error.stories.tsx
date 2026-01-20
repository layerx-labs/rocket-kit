import React from 'react';
import Error, { ErrorProps } from '..';

export default {
  title: 'Components/Molecules/Error',
  component: Error,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal'],
    },
  },
};

export const ErrorComponent = (args: ErrorProps) => <Error {...args} />;

ErrorComponent.args = {
  variant: 'default',
  value: 'This is an awesome error',
};
