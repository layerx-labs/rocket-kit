import React, { useState, useEffect } from 'react';
import Toggle from '../index';
import { ToggleProps } from '../types';

export default {
  title: 'Components/Atoms/Toggle',
  component: Toggle,
};

export const ToggleComponent = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  useEffect(() => {
    setChecked(args.checked ?? false);
  }, [args.checked]);

  return (
    <Toggle
      {...args}
      checked={checked}
      onClick={(value: boolean) => setChecked(value)}
    />
  );
};

ToggleComponent.storyName = 'Toggle';
ToggleComponent.args = {
  checked: true,
  isLabelVisible: true,
  labelLeft: 'Off',
  labelRight: 'On',
  disabled: false,
};
