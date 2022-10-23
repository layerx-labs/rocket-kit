import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import React from 'react';
import RadioGroup, { RadioGroupProps } from '..';

export default {
  title: 'Components/Molecules/RadioGroup',
  component: RadioGroup,
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

const radioButtons = [
  {
    value: 'option_1',
    label: 'Option 1',
    disabled: false,
    checked: undefined,
  },
  { value: 'option_2', label: 'Option 2', disabled: false, checked: undefined },
];

export const RadioGroupComponent: ComponentStory<typeof RadioGroup> = (
  args: RadioGroupProps
) => {
  return <RadioGroup {...args} />;
};

RadioGroupComponent.storyName = 'RadioGroup';

RadioGroupComponent.args = {
  type: 'column',
  group: 'test',
  options: radioButtons,
  error: '',
  disabled: false,
  dataTestId: 'radio',
};
RadioGroupComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const opt1 = canvas.getByTestId('radio-input-1');
  const opt2 = canvas.getByTestId('radio-input-2');

  // Ensure default values
  expect(opt1).not.toBeChecked();
  expect(opt2).not.toBeChecked();

  // Make sure option 1 is checkable
  userEvent.click(opt1);
  expect(opt1).toBeChecked();

  // Make sure option 2 is checkable
  userEvent.click(opt2);
  expect(opt2).toBeChecked();

  // Make sure that they are mutually exclusive
  expect(opt1).not.toBeChecked();
};
