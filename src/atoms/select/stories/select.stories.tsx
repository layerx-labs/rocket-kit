import React, { useState } from 'react';
import Select, { SelectProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/Select',
  component: Select,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

const options = [
  { value: 'option_1', name: 'Option 1' },
  { value: 'option_2', name: 'Option 2' },
  { value: 'option_3', name: 'Option 3' },
];

export const SelectComponent = (args: SelectProps) => {
  const [value, setValue] = useState('');

  return (
    <Select
      {...args}
      value={value}
      onChange={e => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

SelectComponent.storyName = 'Default';
SelectComponent.args = {
  name: 'title',
  placeholder: 'Select One',
  options: options,
  error: '',
  disabled: false,
  onChange: fn(),
};
SelectComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: SelectProps }) => {
  const canvas = within(canvasElement);

  // Verify the select exists
  const select = canvas.getByRole('combobox');
  await expect(select).toBeInTheDocument();

  // Verify placeholder option is present
  const placeholderOption = canvas.getByText('Select One');
  await expect(placeholderOption).toBeInTheDocument();

  // Select an option
  await userEvent.selectOptions(select, 'option_1');
  await expect(select).toHaveValue('option_1');
  await expect(args.onChange).toHaveBeenCalled();

  // Select another option
  await userEvent.selectOptions(select, 'option_2');
  await expect(select).toHaveValue('option_2');
};

export const SelectWithValueComponent = (args: SelectProps) => {
  const [value, setValue] = useState('option_2');

  return (
    <Select
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

SelectWithValueComponent.storyName = 'With Initial Value';
SelectWithValueComponent.args = {
  name: 'title',
  placeholder: 'Select One',
  options: options,
  error: '',
  disabled: false,
};
SelectWithValueComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the select has initial value
  const select = canvas.getByRole('combobox');
  await expect(select).toHaveValue('option_2');

  // Change selection
  await userEvent.selectOptions(select, 'option_3');
  await expect(select).toHaveValue('option_3');
};

export const SelectDisabledComponent = (args: SelectProps) => {
  return <Select {...args} />;
};

SelectDisabledComponent.storyName = 'Disabled';
SelectDisabledComponent.args = {
  name: 'title',
  placeholder: 'Select One',
  options: options,
  value: 'option_1',
  error: '',
  disabled: true,
};
SelectDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the select is disabled
  const select = canvas.getByRole('combobox');
  await expect(select).toBeDisabled();
};

export const SelectWithErrorComponent = (args: SelectProps) => {
  const [value, setValue] = useState('');

  return (
    <Select
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

SelectWithErrorComponent.storyName = 'With Error';
SelectWithErrorComponent.args = {
  name: 'title',
  placeholder: 'Select One',
  options: options,
  error: 'Please select an option',
  disabled: false,
};
SelectWithErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify error message is displayed
  const errorMessage = canvas.getByText('Please select an option');
  await expect(errorMessage).toBeInTheDocument();

  // Verify select still works
  const select = canvas.getByRole('combobox');
  await userEvent.selectOptions(select, 'option_1');
  await expect(select).toHaveValue('option_1');
};

export const SelectRequiredComponent = (args: SelectProps) => {
  const [value, setValue] = useState('');

  return (
    <Select
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

SelectRequiredComponent.storyName = 'Required';
SelectRequiredComponent.args = {
  name: 'title',
  placeholder: 'Select One',
  options: options,
  error: '',
  disabled: false,
};
SelectRequiredComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the select is present and functional
  const select = canvas.getByRole('combobox');
  await expect(select).toBeInTheDocument();

  // Select an option
  await userEvent.selectOptions(select, 'option_1');
  await expect(select).toHaveValue('option_1');
};
