import React from 'react';
import TextFieldAppendix, { TextFieldAppendixProps } from '..';

export default {
  title: 'Design System/Atoms/TextFieldAppendix',
  component: TextFieldAppendix,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'url', 'password', 'date', 'time', 'number'],
      },
    },
  },
};

export const TextFieldPrependComponent = (args: TextFieldAppendixProps) => (
  <TextFieldAppendix {...args} />
);

TextFieldPrependComponent.storyName = 'Prepend';

TextFieldPrependComponent.args = {
  type: 'text',
  name: 'awesome-input-appendix',
  prepend: 'https://taikai.network/',
  append: '',
  placeholder: '',
  onChange: () => {},
  error: '',
  disabled: false,
};

export const TextFieldAppendComponent = (args: TextFieldAppendixProps) => (
  <TextFieldAppendix {...args} />
);

TextFieldAppendComponent.storyName = 'Append';

TextFieldAppendComponent.args = {
  type: 'text',
  name: 'awesome-input-appendix',
  prepend: '',
  append: '@taikai.network',
  placeholder: '',
  onChange: () => {},
  error: '',
  disabled: false,
};
