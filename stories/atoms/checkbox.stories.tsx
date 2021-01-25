import React from 'react';
import { Checkbox } from '../../src';

export default {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
};

export const CheckboxComponent = args => <Checkbox {...args} />;

CheckboxComponent.storyName = 'Checkbox';

CheckboxComponent.args = {
  label: 'Option 1',
  value: 'option_1',
  className: 'checkbox',
  checked: true,
  disabled: false,
  error: '',
  onChange: () => {},
};
