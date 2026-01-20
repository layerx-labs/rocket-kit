import React from 'react';
import ButtonLink, { ButtonLinkProps } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';

export default {
  title: 'Components/Atoms/Button',
  component: ButtonLink,
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
