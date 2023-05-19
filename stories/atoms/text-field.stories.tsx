import React from 'react';
import { TextField } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Components/Atoms/TextField',
  component: TextField,
  argTypes: {
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
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  error: '',
  disabled: false,
  required: false,
};

export const TextDefaultComponent = args => <TextField {...args} />;

TextDefaultComponent.storyName = 'Default Value';
TextDefaultComponent.args = {
  type: 'text',
  defaultValue: 'awesome-input-default',
  value: null,
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};

export const DisabledComponent = args => <TextField {...args} />;

DisabledComponent.storyName = 'Disabled';
DisabledComponent.args = {
  type: 'text',
  name: 'name',
  placeholder: 'Awesome Placeholder',
  value: 'Cannot edit this',
  onChange: () => {},
  disabled: true,
};

export const TextFullBorderComponent = args => <TextField {...args} />;

TextFullBorderComponent.storyName = 'Full Border';
TextFullBorderComponent.args = {
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};

export const TextIconComponent = args => <TextField {...args} />;

TextIconComponent.storyName = 'W/ Icon';
TextIconComponent.args = {
  type: 'text',
  name: 'awesome-input',
  icon: 'rocket',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};

export const UrlComponent = args => <TextField {...args} />;

UrlComponent.storyName = 'URL';
UrlComponent.args = {
  type: 'url',
  name: 'awesome-url',
  placeholder: 'Type your URL here',
  onChange: () => {},
  disabled: false,
};

export const PasswordComponent = args => <TextField {...args} />;

PasswordComponent.storyName = 'Password';
PasswordComponent.args = {
  type: 'password',
  name: 'awesome-password',
  placeholder: 'Type your password here',
  onChange: () => {},
  disabled: false,
};

export const DateComponent = args => <TextField {...args} />;

DateComponent.storyName = 'Date';
DateComponent.args = {
  type: 'date',
  name: 'awesome-date',
  onChange: () => {},
  disabled: false,
};

export const TimeComponent = args => <TextField {...args} />;

TimeComponent.storyName = 'Time';
TimeComponent.args = {
  type: 'time',
  name: 'awesome-time',
  onChange: () => {},
  disabled: false,
};

export const NumberComponent = args => <TextField {...args} />;

NumberComponent.storyName = 'Number';
NumberComponent.args = {
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
  type: 'text',
  name: 'awesome-input',
  placeholder: 'Awesome Placeholder',
  value: 'This is bad',
  onChange: () => {},
  error: 'Not so awesome error',
  disabled: false,
};
