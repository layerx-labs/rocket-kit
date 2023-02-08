import React from 'react';
import Button, { ButtonProps } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'outline', 'text'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
    txtColor: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
    iconPosition: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['', ...Object.keys(icons)],
      },
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
