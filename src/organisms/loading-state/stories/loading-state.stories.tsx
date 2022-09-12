import React from 'react';
import LoadingState, { LoadingStateProps } from '..';

export default {
  title: 'Components/Organisms/Empty States',
  component: LoadingState,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'card', 'value'],
      },
    },
  },
};

export const LoadingStateComponent = (args: LoadingStateProps) => (
  <LoadingState {...args} />
);

LoadingStateComponent.storyName = 'LoadingState';
LoadingStateComponent.args = {
  type: 'text',
  lines: 3,
  cardsNumber: 8,
  center: true,
};
