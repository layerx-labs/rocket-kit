import React from 'react';
import { Button, ButtonLink } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Design System/Atoms/ButtonLink',
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

export const ButtonLinkComponent = (args) => <ButtonLink {...args} />;

ButtonLinkComponent.args = {
  url: "https://github.com/taikai/taikai-design-system",
  value: 'Contribute to this code',
  variant: 'solid',
  circle: false,
  color: 'magic',
  className: 'button',
  querySelector: '.button',
  ariaLabel: 'Dummie Button',
  disabled: false,
  loading: false,
  icon: 'github',
  blank: true
};


