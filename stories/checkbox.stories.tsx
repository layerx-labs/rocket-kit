import React from 'react';
import { Checkbox } from '../src';

export default {
  title: 'Design System|Atoms|Checkbox',
  component: Checkbox,
};

export const CheckboxComponent = args => <Checkbox {...args} />;

CheckboxComponent.args = {
  name: 'Checkbox',
  label: 'ola',
  checked: true,
};