import { ComponentStory } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { within } from '@testing-library/react';
import { expect } from '@storybook/jest';
import React, { useState } from 'react';
import TextArea, { TextAreaProps } from '..';

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  argTypes: {
    minimal: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const TextAreaComponent: ComponentStory<typeof TextArea> = (
  args: TextAreaProps
) => <TextArea {...args} />;

TextAreaComponent.storyName = 'Text Area';
TextAreaComponent.args = {
  minimal: true,
  name: 'awesome-text-area',
  placeholder: 'Awesome Placeholder',
  height: '100px',
  onChange: () => {},
  error: '',
  disabled: false,
  required: false,
};
TextAreaComponent.play = async ({ canvasElement }) => {
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

export const TextAreaCharactersCountComponent: ComponentStory<typeof TextArea> =
  (args: TextAreaProps) => {
    const [text, setText] = useState('');
    const textLength = 280 - text.length;

    return (
      <TextArea
        charactersCount={textLength}
        onChange={evt => {
          setText(evt.target.value);
        }}
        {...args}
      />
    );
  };

TextAreaCharactersCountComponent.storyName = 'Characters Count';
TextAreaCharactersCountComponent.args = {
  minimal: true,
  name: 'awesome-text-area',
  placeholder: 'Awesome Placeholder',
  height: '100px',
  error: '',
  disabled: false,
  required: false,
};
TextAreaCharactersCountComponent.play = async ({ canvasElement }) => {
  // Make sure that it is unckecked before any interaction
  const canvas = within(canvasElement);
  await expect(canvas.getByTestId('text-count').nodeValue).toEqual(280);
  userEvent.type(canvas.getByTestId('text'), 'asdf');
  await expect(canvas.getByTestId('text-count').nodeValue).toEqual(276);
  userEvent.clear(canvas.getByTestId('text'));
};

export const TextAreaDefaultComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

TextAreaDefaultComponent.storyName = 'Default Value';
TextAreaDefaultComponent.args = {
  minimal: true,
  height: '100px',
  placeholder: 'Awesome Placeholder',
  defaultValue: 'Awesome default text!',
  value: null,
  onChange: () => {},
  disabled: false,
};

export const TextAreaDisabledComponent: ComponentStory<typeof TextArea> = (
  args: TextAreaProps
) => <TextArea {...args} />;

TextAreaDisabledComponent.storyName = 'Disabled';
TextAreaDisabledComponent.args = {
  minimal: true,
  name: 'name',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  value: 'Cannot edit this',
  onChange: () => {},
  disabled: true,
};
TextAreaDisabledComponent.play = async ({ canvasElement }) => {
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

export const TextAreaFullBorderComponent: ComponentStory<typeof TextArea> = (
  args: TextAreaProps
) => <TextArea {...args} />;

TextAreaFullBorderComponent.storyName = 'Full Border';
TextAreaFullBorderComponent.args = {
  minimal: false,
  name: 'awesome-input',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
};
TextAreaFullBorderComponent.play = ({ canvasElement }) => {
  const textField = within(canvasElement).getByRole('textbox');
  const css = getComputedStyle(textField);
  // expect it to have a full border
  expect(css.borderWidth.match(/(\d+)/)!.map(Number)[0]).toBeGreaterThan(0);
  expect(css.borderTop).toEqual(css.borderRight);
  expect(css.borderRight).toEqual(css.borderBottom);
  expect(css.borderBottom).toEqual(css.borderLeft);
};

export const TextAreaErrorComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

TextAreaErrorComponent.storyName = 'Error';
TextAreaErrorComponent.args = {
  minimal: true,
  name: 'awesome-input',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  value: 'This is bad',
  onChange: () => {},
  error: 'Not so awesome error',
  disabled: false,
};
