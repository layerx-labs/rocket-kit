import React from 'react';
import RadioGroup, { RadioGroupProps } from '..';

export default {
  title: 'Components/Molecules/RadioGroup',
  component: RadioGroup,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['row', 'column'],
    },
    onChange: { action: () => {} },
  },
};

const radioButtons = [
  {
    value: 'option_1',
    label: 'Option 1',
    disabled: false,
    checked: undefined,
  },
  { value: 'option_2', label: 'Option 2', disabled: false, checked: undefined },
];

export const RadioGroupComponent = (args: RadioGroupProps) => {
  return <RadioGroup {...args} />;
};

RadioGroupComponent.storyName = 'RadioGroup';

RadioGroupComponent.args = {
  type: 'column',
  group: 'test',
  options: radioButtons,
  error: '',
  disabled: false,
};
