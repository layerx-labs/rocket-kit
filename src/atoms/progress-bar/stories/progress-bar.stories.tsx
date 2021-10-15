import React from 'react';
import ProgressBar, { ProgressBarProps } from '..';

export default {
  title: 'Design System/Atoms/Progress Bar',
  component: ProgressBar,
};

export const ProgressBarComponent = (args: ProgressBarProps) => {
  return <ProgressBar {...args} />;
};

ProgressBarComponent.storyName = 'Progress Bar';

ProgressBarComponent.args = {
  progress: 10,
  value: '10%',
};
