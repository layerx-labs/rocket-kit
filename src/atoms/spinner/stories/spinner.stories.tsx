import React from 'react';
import Spinner, { SpinnerProps } from '..';

export default {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
  argTypes: {
    fill: { control: 'color' },
  },
};

export const SpinnerComponent = (args: SpinnerProps) => <Spinner {...args} />;

SpinnerComponent.storyName = 'Spinner';

SpinnerComponent.args = {
  fill: '#939393',
  size: '20px',
};
