import React from 'react';
import { Tag } from '../../src';

export default {
  title: 'Design System/Atoms/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'warning', 'danger', 'info'],
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

TagPrimaryComponent.storyName = 'Tag';

TagPrimaryComponent.args = {
  color: 'info',
  variant: 'solid',
  value: 'Burgdoggen',
};
