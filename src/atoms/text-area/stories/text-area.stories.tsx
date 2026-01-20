import React, { useState } from 'react';
import TextArea, { TextAreaProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
};

export const TextAreaComponent = (args: TextAreaProps) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <TextArea
      {...args}
      value={value}
      onChange={e => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

TextAreaComponent.storyName = 'Text Area';
TextAreaComponent.args = {
  name: 'awesome-text-area',
  placeholder: 'Awesome Placeholder',
  height: '100px',
  error: '',
  disabled: false,
  required: false,
  onChange: fn(),
};
TextAreaComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: TextAreaProps }) => {
  const canvas = within(canvasElement);

  // Verify the textarea exists
  const textarea = canvas.getByPlaceholderText('Awesome Placeholder');
  await expect(textarea).toBeInTheDocument();

  // Type in the textarea
  await userEvent.type(textarea, 'Hello World');
  await expect(textarea).toHaveValue('Hello World');
  await expect(args.onChange).toHaveBeenCalled();

  // Clear and type again
  await userEvent.clear(textarea);
  await userEvent.type(textarea, 'New multiline\ntext content');
  await expect(textarea).toHaveValue('New multiline\ntext content');
};

export const TextAreaCharactersCountComponent = (args: TextAreaProps) => {
  const [text, setText] = useState('');
  const textLength = 280 - text.length;

  return (
    <TextArea
      {...args}
      value={text}
      charactersCount={textLength}
      onChange={evt => {
        setText(evt.target.value);
      }}
    />
  );
};

TextAreaCharactersCountComponent.storyName = 'Characters Count';
TextAreaCharactersCountComponent.args = {
  name: 'awesome-text-area',
  placeholder: 'Awesome Placeholder',
  height: '100px',
  error: '',
  disabled: false,
  required: false,
};
TextAreaCharactersCountComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the textarea exists
  const textarea = canvas.getByPlaceholderText('Awesome Placeholder');
  await expect(textarea).toBeInTheDocument();

  // Type some text
  await userEvent.type(textarea, 'Hello');

  // Verify characters count is displayed (280 - 5 = 275)
  const charCount = canvas.getByText('275');
  await expect(charCount).toBeInTheDocument();

  // Type more text
  await userEvent.type(textarea, ' World!');
  const newCharCount = canvas.getByText('268');
  await expect(newCharCount).toBeInTheDocument();
};

export const TextAreaDefaultComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

TextAreaDefaultComponent.storyName = 'Default Value';
TextAreaDefaultComponent.args = {
  height: '100px',
  placeholder: 'Awesome Placeholder',
  defaultValue: 'Awesome default text!',
  onChange: fn(),
  disabled: false,
};
TextAreaDefaultComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the textarea has default value
  const textarea = canvas.getByDisplayValue('Awesome default text!');
  await expect(textarea).toBeInTheDocument();
};

export const TextAreaDisabledComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

TextAreaDisabledComponent.storyName = 'Disabled';
TextAreaDisabledComponent.args = {
  name: 'name',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  value: 'Cannot edit this',
  onChange: fn(),
  disabled: true,
};
TextAreaDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the textarea is disabled
  const textarea = canvas.getByDisplayValue('Cannot edit this');
  await expect(textarea).toBeDisabled();
};

export const TextAreaFullBorderComponent = (args: TextAreaProps) => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TextAreaFullBorderComponent.storyName = 'Full Border';
TextAreaFullBorderComponent.args = {
  name: 'awesome-input',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  disabled: false,
};
TextAreaFullBorderComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const textarea = canvas.getByPlaceholderText('Awesome Placeholder');
  await expect(textarea).toBeInTheDocument();

  // Type in the textarea
  await userEvent.type(textarea, 'Test Value');
  await expect(textarea).toHaveValue('Test Value');
};

export const TextAreaErrorComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

TextAreaErrorComponent.storyName = 'Error';
TextAreaErrorComponent.args = {
  name: 'awesome-input',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  value: 'This is bad',
  onChange: fn(),
  error: 'Not so awesome error',
  disabled: false,
};
TextAreaErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify error message is displayed
  const errorMessage = canvas.getByText('Not so awesome error');
  await expect(errorMessage).toBeInTheDocument();

  // Verify textarea value
  const textarea = canvas.getByDisplayValue('This is bad');
  await expect(textarea).toBeInTheDocument();
};

export const TextAreaRequiredComponent = (args: TextAreaProps) => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TextAreaRequiredComponent.storyName = 'Required';
TextAreaRequiredComponent.args = {
  name: 'required-textarea',
  height: '100px',
  placeholder: 'Required field',
  disabled: false,
  required: true,
};
TextAreaRequiredComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const textarea = canvas.getByPlaceholderText('Required field');
  await expect(textarea).toBeRequired();
};
