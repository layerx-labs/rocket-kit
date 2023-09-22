import React from 'react';
import Checkbox, { CheckboxProps } from '..';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
};

export const CheckboxSimpleComponent = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

CheckboxSimpleComponent.storyName = 'Simple';
CheckboxSimpleComponent.args = {
  label: 'Option 1',
  value: 'option_1',
  className: 'checkbox',
  checked: true,
  disabled: false,
  error: false,
  onChange: () => {},
};

export const CheckboxNodeComponent = (args: CheckboxProps) => (
  <Checkbox
    label={[
      'I agree with ',
      <a href="#0">Terms of Service</a>,
      ' and ',
      <a href="#0">Privacy Policy</a>,
      ' of TAIKAI',
    ]}
    {...args}
  />
);

CheckboxNodeComponent.storyName = 'With links';
CheckboxNodeComponent.args = {
  value: 'option_1',
  className: 'checkbox',
  checked: false,
  disabled: false,
  error: false,
  onChange: () => {},
};
