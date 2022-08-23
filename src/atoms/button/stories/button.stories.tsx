import React from 'react';
import Button, { ButtonProps } from '..';
import icons from '../../../ions/icons';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'green',
          'orange',
          'red',
          'grey',
          'purple',
          'blue',
          'white',
          'dark',
          'magic',
          'pulse',
        ],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'outline', 'text'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
};

export const ButtonComponent = (args: ButtonProps) => <Button {...args} />;

ButtonComponent.storyName = 'Action';
ButtonComponent.args = {
  value: 'Dummie',
  variant: 'solid',
  color: 'green',
  circle: false,
  className: 'button',
  querySelector: '.button',
  ariaLabel: 'Dummie Button',
  disabled: false,
  loading: false,
  icon: 'rocket',
  iconPosition: 'left',
};
