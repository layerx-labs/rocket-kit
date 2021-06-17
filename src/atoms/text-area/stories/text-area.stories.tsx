import React, { useState } from 'react';
import TextArea, { TextAreaProps } from '..';

export default {
  title: 'Design System/Atoms/TextArea',
  component: TextArea,
  argTypes: {
    minimal: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const TextAreaComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

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

export const TextAreaCharactersCountComponent = (args: TextAreaProps) => {
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

export const TextAreaDisabledComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

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

export const TextAreaFullBorderComponent = (args: TextAreaProps) => (
  <TextArea {...args} />
);

TextAreaFullBorderComponent.storyName = 'Full Border';
TextAreaFullBorderComponent.args = {
  minimal: false,
  name: 'awesome-input',
  height: '100px',
  placeholder: 'Awesome Placeholder',
  onChange: () => {},
  disabled: false,
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
