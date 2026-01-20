import React from 'react';
import Tag, { TagProps } from '..';
import { colors } from '../../../ions/variables';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(colors),
    },
    txtColor: {
      control: 'select',
      options: Object.keys(colors),
    },
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline'],
    },
  },
};

export const TagPrimaryComponent = (args: TagProps) => <Tag {...args} />;

TagPrimaryComponent.storyName = 'Simple';

TagPrimaryComponent.args = {
  color: 'purple500',
  txtColor: 'white',
  variant: 'solid',
  value: 'Burgdoggen',
};
