import React from 'react';
import Toggle from '../index';
import { ToggleProps } from '../types';

export default {
  title: 'Design System/Atoms/Toggle',
  component: Toggle,
};

export const ToogleComponent = (args: ToggleProps) => <Toggle {...args} />;
ToogleComponent.storyName = 'Toggle';
