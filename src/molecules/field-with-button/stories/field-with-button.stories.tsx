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
  return <FieldWidthButton {...args} buttonAction={(_, e) => console.log(e)} />;
};

FieldWidthButtonComponent.storyName = 'FieldWidthButton';

FieldWidthButtonComponent.args = {
  label: 'Copy Link',
  value: 'https://taikai.network',
  buttonIcon: 'copy',
  buttonValue: '',
};
