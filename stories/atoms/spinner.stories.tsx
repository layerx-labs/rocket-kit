import React from 'react';
import { Spinner } from '../../src';

export default {
  title: 'Design System/Atoms/Spinner',
  component: Spinner,
  argTypes: {
    fill: { control: 'color' },
  },
};

export const SpinnerComponent = (args) => <Spinner {...args} />;

SpinnerComponent.storyName = 'Spinner';

SpinnerComponent.args = {
  fill: '#000000',
  size: '20px',
};
