import React from 'react';
import { Button, ButtonDropdown, ButtonLink } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Design System/Atoms/Button',
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

export const ButtonComponent = args => <Button {...args} />;

ButtonComponent.storyName = 'Action';
ButtonComponent.args = {
  value: 'Dummie',
  variant: 'solid',
  color: 'primary',
  circle: false,
  className: 'button',
  querySelector: '.button',
  ariaLabel: 'Dummie Button',
  disabled: false,
  loading: false,
  icon: 'rocket',
  iconPosition: 'left',
};

export const ButtonDropdownComponent = args => <ButtonDropdown {...args} />;

const actions = [
  {
    id: 'createChallenge',
    value: 'Challenge',
    url: null,
    action: () => {},
  },
  {
    id: 'createHiringChallenge',
    value: 'Hiring Challenge',
    url: null,
    action: () => {},
  },
];

ButtonDropdownComponent.storyName = 'Dropdown';
ButtonDropdownComponent.args = {
  variant: 'solid',
  color: 'primary',
  value: 'Create',
  icon: 'add',
  ariaLabel: 'Create Challenge',
  actions,
  dataTestId: 'action-button-dropdown',
  startsOpen: false,
  disabled: false,
};

export const ButtonLinkComponent = args => <ButtonLink {...args} />;

ButtonLinkComponent.storyName = 'Link';
ButtonLinkComponent.args = {
  ...ButtonComponent.args,
  iconPosition: 'left',
  url: 'https://github.com/taikai/taikai-design-system',
  blank: true,
};
