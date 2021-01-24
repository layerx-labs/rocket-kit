import React from 'react';
import { Tag } from '../../src';

export default {
  title: 'Design System/Atoms/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'orange', 'danger', 'info'],
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

export const TagPrimaryComponent = (args) => <Tag {...args} />;

TagPrimaryComponent.storyName = 'Tag';

TagPrimaryComponent.args = {
  color: 'primary',
  variant: 'solid',
  value: 'Burgdoggen',
};
