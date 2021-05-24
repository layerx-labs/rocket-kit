import React from 'react';
import Select, { SelectProps } from '..';

export default {
  title: 'Design System/Atoms/Select',
  component: Select,
  argTypes: {
    minimal: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { action: 'update value' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const options = [
  { value: 'option_1', name: 'Option 1' },
  { value: 'option_2', name: 'Option 2' },
  { value: 'option_3', name: 'Option 3' },
];

export const SelectComponent = (args: SelectProps) => {
  return <Select {...args} />;
};

SelectComponent.storyName = 'Default';

SelectComponent.args = {
  minimal: false,
  name: 'title',
  options: options,
  error: '',
  disabled: false,
};
