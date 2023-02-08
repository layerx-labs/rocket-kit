import React from 'react';
import CheckboxButton, { CheckboxButtonProps } from '..';

export default {
  title: 'Components/Atoms/Checkbox',
  component: CheckboxButton,
  argTypes: { onChange: { action: () => {} } },
};

export const CheckboxButtonComponent = (args: CheckboxButtonProps) => (
  <CheckboxButton {...args} />
);

CheckboxButtonComponent.storyName = 'Toggle Button';
CheckboxButtonComponent.args = {
  label: 'Value for Real',
  value: 'option_1',
  checked: false,
  className: 'checkbox-button',
  disabled: false,
  required: false,
};
