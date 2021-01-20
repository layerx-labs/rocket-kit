import React from 'react';
import { Button } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'danger',
          'info',
          'purple',
          'white',
          'black',
          'magic',
          'live',
        ],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'text'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
  },
};

export const ButtonComponent = (args) => <Button {...args} />;

ButtonComponent.args = {
  value: 'Dummie',
  variant: 'solid',
  circle: false,
  color: 'primary',
  className: 'button',
  querySelector: '.button',
  ariaLabel: 'Dummie Button',
  disabled: false,
  loading: false,
  icon: 'rocket',
};
