import React from 'react';
import ButtonLink, { ButtonLinkProps } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonLink,
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

export const ButtonLinkComponent = (args: ButtonLinkProps) => (
  <ButtonLink {...args} />
);

ButtonLinkComponent.storyName = 'Link';
ButtonLinkComponent.args = {
  variant: 'solid',
  rounded: false,
  color: 'purple500',
  txtColor: 'white',
  className: 'button',
  url: 'https://github.com/taikai/rocket-kit',
  blank: false,
  rel: 'noopener',
  value: 'Dummie',
  iconPosition: 'right',
  icon: '',
  ariaLabel: 'Dummie Button',
  ariaHidden: false,
};
