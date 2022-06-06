import React from 'react';
import { Tag } from '../../src';

export default {
  title: 'Design System/Atoms/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['green', 'orange', 'red', 'grey', 'light'],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'outline'],
      },
    },
  },
};

export const TagPrimaryComponent = args => <Tag {...args} />;

TagPrimaryComponent.storyName = 'Simple';

TagPrimaryComponent.args = {
  color: 'grey',
  variant: 'solid',
  value: 'Burgdoggen',
};
