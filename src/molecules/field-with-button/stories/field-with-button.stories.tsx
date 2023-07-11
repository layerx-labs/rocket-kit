import React from 'react';
import FieldWidthButton, { FieldWidthButtonProps } from '..';

export default {
  title: 'Components/Molecules/FieldWidthButton',
  component: FieldWidthButton,
  argTypes: {
    onChange: { action: () => {} },
    buttonAction: { action: 'update value' },
  },
};

export const FieldWidthButtonComponent = (args: FieldWidthButtonProps) => {
  return (
    <FieldWidthButton
      {...args}
      buttonAction={value => console.log(value)}
      onChange={value => console.log(value)}
    />
  );
};

FieldWidthButtonComponent.storyName = 'FieldWidthButton';

FieldWidthButtonComponent.args = {
  label: 'Copy Link',
  value: 'https://taikai.network',
  buttonIcon: 'copy',
  buttonValue: '',
  disabled: true,
};
