import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within } from '@testing-library/react';
import React from 'react';
import Select, { SelectProps } from '..';
import { userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Atoms/Select',
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

export const SelectComponent: ComponentStory<typeof Select> = (
  args: SelectProps
) => {
  return <Select {...args} />;
};

SelectComponent.storyName = 'Default';

SelectComponent.args = {
  minimal: false,
  name: 'title',
  placeholder: 'Select One',
  options: options,
  error: '',
  disabled: false,
  dataTestId: 'select',
};
SelectComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByTestId('select');

  // Make sure no optin is selected by default
  expect(select).toHaveValue('');
  expect(select).toHaveDisplayValue('Select One');

  userEvent.selectOptions(select, 'option_1');
  expect(select).toHaveDisplayValue('Option 1');

  userEvent.selectOptions(select, 'option_2');
  expect(select).toHaveDisplayValue('Option 2');
};
