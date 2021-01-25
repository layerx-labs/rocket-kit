import React from 'react';
import { TextField } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Design System/Atoms/TextField',
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
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
  },
};

export const TextComponent = args => <TextField {...args} />;

TextComponent.args = {
  minimal: true,
  type: 'text',
  name: 'name',
  onChange: () => {},
  disabled: false,
  placeholder: 'type your name here',
};

export const DefaultValuesComponent = () => <TextField />;

export const DisabledComponent = args => <TextField {...args} />;

DisabledComponent.args = {
  minimal: true,
  type: 'text',
  name: 'name',
  onChange: () => {},
  disabled: true,
  value: 'cannot edit this',
};

export const TextNotMinimalComponent = args => <TextField {...args} />;

TextNotMinimalComponent.args = {
  minimal: false,
  type: 'text',
  name: 'name',
  onChange: () => {},
  disabled: false,
  placeholder: 'type your name here',
};

export const TextIconComponent = args => <TextField {...args} />;

TextIconComponent.args = {
  minimal: true,
  icon: 'rocket',
  type: 'text',
  name: 'name',
  onChange: () => {},
  disabled: false,
  placeholder: 'type your name here',
};

export const UrlComponent = args => <TextField {...args} />;

UrlComponent.args = {
  minimal: true,
  type: 'url',
  name: 'url',
  onChange: () => {},
  disabled: false,
  placeholder: 'type your url here',
};

export const PasswordComponent = args => <TextField {...args} />;

PasswordComponent.args = {
  minimal: true,
  type: 'password',
  name: 'password',
  onChange: () => {},
  disabled: false,
  placeholder: 'type your password here',
};

export const DateComponent = args => <TextField {...args} />;

DateComponent.args = {
  minimal: true,
  type: 'date',
  name: 'date',
  onChange: () => {},
  disabled: false,
};

export const TimeComponent = args => <TextField {...args} />;

TimeComponent.args = {
  minimal: true,
  type: 'time',
  name: 'time',
  onChange: () => {},
  disabled: false,
};

export const NumberComponent = args => <TextField {...args} />;

NumberComponent.args = {
  minimal: false,
  type: 'number',
  name: 'number',
  onChange: () => {},
  disabled: false,
  min: 1,
  max: 150,
  placeholder: 'age',
};

export const TextErrorComponent = args => <TextField {...args} />;

TextErrorComponent.args = {
  minimal: true,
  type: 'text',
  name: 'name',
  onChange: () => {},
  disabled: false,
  value: 'lol',
  error: 'invalid value',
};
