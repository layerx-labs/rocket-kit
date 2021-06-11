import React from 'react';
import LoadingState, { LoadingStateProps } from '..';

export default {
  title: 'Design System/Organisms/Empty States',
  component: LoadingState,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'card', 'table', 'value'],
      },
    },
  },
};

export const LoadingStateComponent = (args: LoadingStateProps) => (
  <LoadingState {...args} />
);

LoadingStateComponent.storyName = 'Loading State';
LoadingStateComponent.args = {
  type: 'text',
  lines: 3,
  cardsNumber: 8,
  header: true,
  columnsNumber: 4,
  rowsNumber: 3,
  center: true,
};
