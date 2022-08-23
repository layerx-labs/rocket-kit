import React from 'react';
import ButtonDropdown, { ActionsMenuInterface } from '..';
import icons from '../../../ions/icons';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonDropdown,
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
  },
};

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

export const ButtonDropdownComponent = <T,>(args: ActionsMenuInterface<T>) => (
  <ButtonDropdown {...args} />
);

ButtonDropdownComponent.storyName = 'Dropdown';
ButtonDropdownComponent.args = {
  variant: 'solid',
  color: 'green',
  value: 'Create',
  icon: 'add',
  ariaLabel: 'Create Challenge',
  actions,
  dataTestId: 'action-button-dropdown',
  startsOpen: false,
  disabled: false,
};
