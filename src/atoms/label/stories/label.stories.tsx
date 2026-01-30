import React from 'react';
import Label, { LabelProps } from '..';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  argTypes: {
    currency: {
      control: 'select',
      options: ['', 'lx', 'vote', 'tkai', 'vkai'],
    },
  },
};

export const LabelComponentKAI = (args: LabelProps) => {
  return <Label {...args} />;
};

LabelComponentKAI.storyName = 'With Currency';
LabelComponentKAI.args = {
  currency: 'lx',
  value: 'Amount',
};

export const LabelComponent = (args: LabelProps) => <Label {...args} />;

LabelComponent.storyName = 'Only Text';
LabelComponent.args = {
  value: 'Stats',
};
