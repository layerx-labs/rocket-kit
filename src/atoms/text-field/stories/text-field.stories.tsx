import React, { useState } from 'react';
import TextField, { TextFieldProps } from '..';
import icons from '../../../ions/icons';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/TextField',
  component: TextField,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'url', 'password', 'date', 'time', 'number'],
    },
    icon: {
      control: 'select',
      options: Object.keys(icons),
    },
  },
};

export const TextComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

TextComponent.storyName = 'Text';
TextComponent.args = {
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  error: '',
  disabled: false,
  required: false,
  onChange: fn(),
};
TextComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: TextFieldProps }) => {
  const canvas = within(canvasElement);

  // Verify the input exists
  const input = canvas.getByPlaceholderText('Awesome Placeholder');
  await expect(input).toBeInTheDocument();

  // Type in the input
  await userEvent.type(input, 'Hello World');
  await expect(input).toHaveValue('Hello World');
  await expect(args.onChange).toHaveBeenCalled();

  // Clear and type again
  await userEvent.clear(input);
  await userEvent.type(input, 'New Value');
  await expect(input).toHaveValue('New Value');
};

export const TextDefaultComponent = (args: TextFieldProps) => (
  <TextField {...args} />
);

TextDefaultComponent.storyName = 'Default Value';
TextDefaultComponent.args = {
  type: 'text',
  defaultValue: 'awesome-input-default',
  placeholder: 'Awesome Placeholder',
  onChange: fn(),
  disabled: false,
};
TextDefaultComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the input has default value
  const input = canvas.getByDisplayValue('awesome-input-default');
  await expect(input).toBeInTheDocument();
};

export const DisabledComponent = (args: TextFieldProps) => (
  <TextField {...args} />
);

DisabledComponent.storyName = 'Disabled';
DisabledComponent.args = {
  type: 'text',
  name: 'name',
  placeholder: 'Awesome Placeholder',
  value: 'Cannot edit this',
  onChange: fn(),
  disabled: true,
};
DisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the input is disabled
  const input = canvas.getByDisplayValue('Cannot edit this');
  await expect(input).toBeDisabled();
};

export const TextFullBorderComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TextFullBorderComponent.storyName = 'Full Border';
TextFullBorderComponent.args = {
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  disabled: false,
};
TextFullBorderComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByPlaceholderText('Awesome Placeholder');
  await expect(input).toBeInTheDocument();

  // Type in the input
  await userEvent.type(input, 'Test Value');
  await expect(input).toHaveValue('Test Value');
};

export const TextIconComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TextIconComponent.storyName = 'W/ Icon';
TextIconComponent.args = {
  type: 'text',
  name: 'awesome-input',
  icon: 'rocket',
  placeholder: 'Awesome Placeholder',
  disabled: false,
};
TextIconComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByPlaceholderText('Awesome Placeholder');
  await expect(input).toBeInTheDocument();

  // Verify icon is present via CSS class (icon is rendered as CSS background)
  await expect(input.className).toContain('hasIcon');

  // Type in the input
  await userEvent.type(input, 'With Icon');
  await expect(input).toHaveValue('With Icon');
};

export const UrlComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

UrlComponent.storyName = 'URL';
UrlComponent.args = {
  type: 'url',
  name: 'awesome-url',
  placeholder: 'Type your URL here',
  disabled: false,
};
UrlComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByPlaceholderText('Type your URL here');
  await expect(input).toHaveAttribute('type', 'url');

  await userEvent.type(input, 'https://example.com');
  await expect(input).toHaveValue('https://example.com');
};

export const PasswordComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

PasswordComponent.storyName = 'Password';
PasswordComponent.args = {
  type: 'password',
  name: 'awesome-password',
  placeholder: 'Type your password here',
  disabled: false,
};
PasswordComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByPlaceholderText('Type your password here');
  await expect(input).toHaveAttribute('type', 'password');

  await userEvent.type(input, 'secretpassword');
  await expect(input).toHaveValue('secretpassword');
};

export const DateComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

DateComponent.storyName = 'Date';
DateComponent.args = {
  type: 'date',
  name: 'awesome-date',
  disabled: false,
};
DateComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvasElement.querySelector('input[type="date"]') as HTMLInputElement;
  await expect(input).toBeInTheDocument();
};

export const TimeComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TimeComponent.storyName = 'Time';
TimeComponent.args = {
  type: 'time',
  name: 'awesome-time',
  disabled: false,
};
TimeComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvasElement.querySelector('input[type="time"]') as HTMLInputElement;
  await expect(input).toBeInTheDocument();
};

export const NumberComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

NumberComponent.storyName = 'Number';
NumberComponent.args = {
  type: 'number',
  min: 1,
  max: 150,
  name: 'awesome-number',
  placeholder: 'Your age',
  disabled: false,
};
NumberComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByPlaceholderText('Your age') as HTMLInputElement;
  await expect(input).toHaveAttribute('type', 'number');
  await expect(input).toHaveAttribute('min', '1');
  await expect(input).toHaveAttribute('max', '150');

  await userEvent.type(input, '25');
  await expect(input).toHaveValue(25);
};

export const TextErrorComponent = (args: TextFieldProps) => (
  <TextField {...args} />
);

TextErrorComponent.storyName = 'Error';
TextErrorComponent.args = {
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  value: 'This is bad',
  onChange: fn(),
  error: 'Not so awesome error',
  disabled: false,
};
TextErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify error message is displayed
  const errorMessage = canvas.getByText('Not so awesome error');
  await expect(errorMessage).toBeInTheDocument();

  // Verify input value
  const input = canvas.getByDisplayValue('This is bad');
  await expect(input).toBeInTheDocument();
};

export const TextRequiredComponent = (args: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TextRequiredComponent.storyName = 'Required';
TextRequiredComponent.args = {
  type: 'text',
  name: 'required-input',
  placeholder: 'Required field',
  disabled: false,
  required: true,
};
TextRequiredComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByPlaceholderText('Required field');
  await expect(input).toBeRequired();
};
