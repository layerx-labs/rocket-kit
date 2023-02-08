import React from 'react';
import ButtonDropdown, { ActionsMenuInterface } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';

export default {
  title: 'Components/Atoms/Button',
  component: ButtonDropdown,
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
    value: 'Hackathon',
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
  rounded: false,
  color: 'purple500',
  txtColor: 'white',
  className: 'button-dropdown',
  value: 'Create',
  icon: 'add',
  ariaLabel: 'Create new challenge',
  ariaHidden: false,
  actions,
  startsOpen: false,
  disabled: false,
};
