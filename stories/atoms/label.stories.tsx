import React from 'react';
import { Label } from '../../src';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
};

export const LabelComponentKAI = args => <Label {...args} />;

LabelComponentKAI.storyName = 'With Currency';
LabelComponentKAI.args = {
  kai: true,
  value: 'Amount',
};

export const LabelComponent = args => <Label {...args} />;

LabelComponent.storyName = 'Only Text';
LabelComponent.args = {
  kai: false,
  value: 'Stats',
};
