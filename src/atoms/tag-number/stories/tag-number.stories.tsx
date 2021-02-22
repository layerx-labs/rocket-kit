import React from 'react';
import TagNumber, { TagNumberProps } from '..';

export default {
  title: 'Design System/Atoms/Tag',
  component: TagNumber,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'warning', 'danger', 'info'],
      },
    },
  },
};

export const TagNumberComponent = (args: TagNumberProps) => (
  <TagNumber {...args} />
);

TagNumberComponent.storyName = 'Number';

TagNumberComponent.args = {
  color: 'info',
  tag: 'Burgdoggen',
  number: 10,
};
