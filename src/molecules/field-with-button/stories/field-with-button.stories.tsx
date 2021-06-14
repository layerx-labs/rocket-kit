import React from 'react';
import FieldWidthButton, { FieldWidthButtonProps } from '..';

export default {
  title: 'Design System/Molecules/FieldWidthButton',
  component: FieldWidthButton,
  argTypes: {
    onChange: { action: () => {} },
    buttonAction: { action: 'update value' },
  },
};

export const FieldWidthButtonComponent = (args: FieldWidthButtonProps) => {
  return <FieldWidthButton {...args} />;
};

FieldWidthButtonComponent.storyName = 'FieldWidthButton';

FieldWidthButtonComponent.args = {
  label: 'Copy Link',
  value: 'https://taikai.network',
  disabled: true,
  buttonIcon: 'copy',
  buttonValue: '',
};
