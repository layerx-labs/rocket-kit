import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import React from 'react';
import { TextField } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Components/Atoms/TextField',
  component: TextField,
  argTypes: {
    minimal: {
      control: {
        type: 'boolean',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'url', 'password', 'date', 'time', 'number'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
  },
};

export const TextComponent = args => <TextField {...args} />;

TextComponent.storyName = 'Text';
TextComponent.args = {
  minimal: true,
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  error: '',
  disabled: false,
  required: false,
};
TextComponent.play = async ({ canvasElement }) => {
  // Make sure that it is unckecked before any interaction
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('textbox')).toBeVisible();

  // Make sure placeholder is visible
  await expect(canvas.getByRole('textbox')).toHaveAttribute(
    'placeholder',
    'Awesome Placeholder'
  );

  await expect(canvas.getByRole('textbox')).not.toHaveFocus();
  const nonSelectedBorderColor = getComputedStyle(
    canvas.getByRole('textbox')
  ).borderColor;
  userEvent.click(canvas.getByRole('textbox'));
  await expect(canvas.getByRole('textbox')).toHaveFocus();
  const selectedBorderColor = getComputedStyle(
    canvas.getByRole('textbox')
  ).borderColor;
  await expect(nonSelectedBorderColor).not.toEqual(selectedBorderColor);

  // Make sure that entered text is visible
  await userEvent.type(canvas.getByRole('textbox'), 'testinput');
  await expect(canvas.getByRole('textbox')).toHaveTextContent('testinput');

  // clear out the textbox
  await userEvent.clear(canvas.getByRole('textbox'));
  await expect(canvas.getByRole('textbox')).toBeEmpty();
};

export const TextDefaultComponent = args => <TextField {...args} />;

TextDefaultComponent.storyName = 'Default Value';
TextDefaultComponent.args = {
  minimal: true,
  type: 'text',
  defaultValue: 'awesome-input-default',
  value: null,
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};
TextDefaultComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Make sure placeholder is visible
  await expect(canvas.getByRole('textbox')).toHaveValue(
    'awesome-input-default'
  );
};

export const DisabledComponent = args => <TextField {...args} />;

DisabledComponent.storyName = 'Disabled';
DisabledComponent.args = {
  minimal: true,
  type: 'text',
  name: 'name',
  placeholder: 'Awesome Placeholder',
  value: 'Cannot edit this',
  onChange: () => {},
  disabled: true,
};
DisabledComponent.play = async ({ canvasElement }) => {
  const textField = within(canvasElement).getByRole('textbox');
  // Make sure that it is not possible to enter text in a disabled textfield
  userEvent.type(textField, 'asdfasdfasdf');
  expect(textField).toHaveValue(undefined);

  // Make sure that it is not focusable
  userEvent.click(textField);
  expect(textField).not.toHaveFocus();

  // expect it to be grayed out
  expect(getComputedStyle(textField).backgroundColor).toEqual(
    'rgb(196, 199, 211)'
  );
};

export const TextFullBorderComponent = args => <TextField {...args} />;

TextFullBorderComponent.storyName = 'Full Border';
TextFullBorderComponent.args = {
  minimal: false,
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};
TextFullBorderComponent.play = ({ canvasElement }) => {
  const textField = within(canvasElement).getByRole('textbox');
  const css = getComputedStyle(textField);
  // expect it to have a full border
  expect(css.borderWidth.match(/(\d+)/).map(Number)[0]).toBeGreaterThan(0);
  expect(css.borderTop).toEqual(css.borderRight);
  expect(css.borderRight).toEqual(css.borderBottom);
  expect(css.borderBottom).toEqual(css.borderLeft);
};

export const TextIconComponent = args => <TextField {...args} />;

TextIconComponent.storyName = 'W/ Icon';
TextIconComponent.args = {
  minimal: true,
  type: 'text',
  name: 'awesome-input',
  icon: 'rocket',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};
TextIconComponent.play = async ({ canvasElement }) => {
  const textField = within(canvasElement).getByRole('textbox');

  // Make sure it has an icon as a background image
  const initialIcon = getComputedStyle(textField).backgroundImage;
  expect(initialIcon).not.toEqual('none');

  // make sure it changes icon to one with color when in focus
  userEvent.click(textField);
  const selectedIcon = getComputedStyle(textField).backgroundImage;
  expect(selectedIcon).not.toEqual(initialIcon);
};

export const UrlComponent = args => <TextField {...args} />;

UrlComponent.storyName = 'URL';
UrlComponent.args = {
  minimal: true,
  type: 'url',
  name: 'awesome-url',
  placeholder: 'Type your URL here',
  onChange: () => {},
  disabled: false,
};
UrlComponent.play = ({ canvasElement }) => {
  const textField = within(canvasElement).getByRole('textbox');

  // expect it to be invalid when a non url string is entered
  userEvent.type(textField, 'not a url');
  expect(textField).toBeInvalid();
  userEvent.clear(textField);

  // expect it to not show an error when a url string is entered
  userEvent.type(textField, 'https://taikai.network');
  expect(textField).toBeValid();

  userEvent.clear(textField);
};

export const PasswordComponent = args => <TextField {...args} />;

PasswordComponent.storyName = 'Password';
PasswordComponent.args = {
  minimal: true,
  type: 'password',
  name: 'awesome-password',
  placeholder: 'Type your password here',
  onChange: () => {},
  disabled: false,
  dataTestId: 'password',
};

export const DateComponent = args => <TextField {...args} />;

DateComponent.storyName = 'Date';
DateComponent.args = {
  minimal: true,
  type: 'date',
  name: 'awesome-date',
  onChange: () => {},
  disabled: false,
};

export const TimeComponent = args => <TextField {...args} />;

TimeComponent.storyName = 'Time';
TimeComponent.args = {
  minimal: true,
  type: 'time',
  name: 'awesome-time',
  onChange: () => {},
  disabled: false,
};

export const NumberComponent = args => <TextField {...args} />;

NumberComponent.storyName = 'Number';
NumberComponent.args = {
  minimal: false,
  type: 'number',
  min: 1,
  max: 150,
  name: 'awesome-number',
  placeholder: 'Your age',
  onChange: () => {},
  disabled: false,
};

export const TextErrorComponent = args => <TextField {...args} />;

TextErrorComponent.storyName = 'Error';
TextErrorComponent.args = {
  minimal: true,
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  value: 'This is bad',
  onChange: () => {},
  error: 'Not so awesome error',
  disabled: false,
};
