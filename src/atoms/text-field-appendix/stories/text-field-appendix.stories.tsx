import { ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import React from 'react';
import TextFieldAppendix, { TextFieldAppendixProps } from '..';

export default {
  title: 'Components/Atoms/TextFieldAppendix',
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

export const TextFieldPrependComponent: ComponentStory<
  typeof TextFieldAppendix
> = (args: TextFieldAppendixProps) => <TextFieldAppendix {...args} />;

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
  dataTestId: 'textfield',
};

TextFieldPrependComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const append = canvas.getByTestId('textfield-prepend');
  expect(append).toBeVisible();
  expect(append).toHaveTextContent('https://taikai.network/');
};

export const TextFieldAppendComponent: ComponentStory<
  typeof TextFieldAppendix
> = (args: TextFieldAppendixProps) => <TextFieldAppendix {...args} />;

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
  dataTestId: 'textfield',
};

TextFieldAppendComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const append = canvas.getByTestId('textfield-append');
  expect(append).toBeVisible();
  expect(append).toHaveTextContent('@taikai.network');
};
