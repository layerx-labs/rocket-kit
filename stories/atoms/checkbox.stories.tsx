import React from 'react';
import { Checkbox } from '../../src';

export default {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
};

export const CheckboxComponent = (args) => <Checkbox {...args} />;

CheckboxComponent.storyName = 'Checkbox';

CheckboxComponent.args = {
  name: 'checkbox',
  label: 'Option 1',
  checked: true,
};
