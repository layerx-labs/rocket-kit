import React from 'react';
import TagNumber, { TagNumberProps } from '..';
import { colors } from '../../../ions/variables';

export default {
  title: 'Components/Atoms/Tag',
  component: TagNumber,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
    valueColor: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
  },
};

export const TagNumberComponent = (args: TagNumberProps) => (
  <TagNumber {...args} />
);

TagNumberComponent.storyName = 'Number';

TagNumberComponent.args = {
  color: 'purple500',
  label: 'Burgdoggen',
  value: 10,
  valueColor: 'white',
};
