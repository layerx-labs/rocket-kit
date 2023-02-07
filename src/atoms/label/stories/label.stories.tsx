import React from 'react';
import Label, { LabelProps } from '..';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  argTypes: {
    currency: {
      control: {
        type: 'select',
        options: ['', 'tkai', 'vkai'],
      },
    },
  },
};

export const LabelComponentKAI = (args: LabelProps) => {
  return <Label {...args} />;
};

LabelComponentKAI.storyName = 'With Currency';
LabelComponentKAI.args = {
  currency: 'tkai',
  value: 'Amount',
};

export const LabelComponent = (args: LabelProps) => <Label {...args} />;

LabelComponent.storyName = 'Only Text';
LabelComponent.args = {
  currency: '',
  value: 'Stats',
};
