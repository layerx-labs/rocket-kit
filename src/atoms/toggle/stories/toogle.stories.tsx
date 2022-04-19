import React from 'react';
import Toggle from '../index';
import { ToggleProps } from '../types';

export default {
  title: 'Design System/Atoms/Toggle',
  component: Toggle,
};

export const ToggleComponent = (args: ToggleProps) => <Toggle {...args} />;

ToggleComponent.storyName = 'Toggle';
ToggleComponent.args = {
  checked: true,
  isLabelVisible: true,
  labelLeft: 'Off',
  labelRight: 'On',
  disabled: false,
};
