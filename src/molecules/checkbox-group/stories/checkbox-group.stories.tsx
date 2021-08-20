import React from 'react';
import CheckboxGroup, { CheckboxGroupProps } from '..';

export default {
  title: 'Design System/Molecules/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['row', 'column'],
      },
    },
    onChange: { action: () => {} },
  },
};

const checkboxButtons = [
  {
    label: 'Option 1',
    value: 'option_1',
    checked: null,
    disabled: false,
  },
  { label: 'Option 2', value: 'option_2', checked: null, disabled: false },
];

export const CheckboxGroupComponent = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};

CheckboxGroupComponent.storyName = 'CheckboxGroup';

CheckboxGroupComponent.args = {
  type: 'column',
  options: checkboxButtons,
  error: '',
  disabled: false,
};
