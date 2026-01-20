import React from 'react';
import Button, { ButtonProps } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline', 'text'],
    },
    color: {
      control: 'select',
      options: Object.keys(colors),
    },
    txtColor: {
      control: 'select',
      options: Object.keys(colors),
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    icon: {
      control: 'select',
      options: ['', ...Object.keys(icons)],
    },
  },
};

export const ButtonComponent = (args: ButtonProps) => <Button {...args} />;

ButtonComponent.storyName = 'Action';
ButtonComponent.args = {
  variant: 'solid',
  rounded: false,
  color: 'purple500',
  txtColor: 'white',
  className: 'button',
  value: 'Dummie',
  iconPosition: 'right',
  icon: '',
  loading: false,
  ariaLabel: 'Dummie Button',
  ariaHidden: false,
  disabled: false,
};
