import React from 'react';
import ButtonLink, { ButtonLinkProps } from '..';
import icons from '../../../ions/icons';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonLink,
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

export const ButtonLinkComponent = (args: ButtonLinkProps) => (
  <ButtonLink {...args} />
);

ButtonLinkComponent.storyName = 'Link';
ButtonLinkComponent.args = {
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
  rel: 'noopener',
  url: 'https://github.com/taikai/taikai-design-system',
  blank: false,
};
