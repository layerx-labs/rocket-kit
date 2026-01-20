import React from 'react';
import ButtonDropdown, { ActionsMenuInterface } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/Button',
  component: ButtonDropdown,
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
    icon: {
      control: 'select',
      options: Object.keys(icons),
    },
  },
};

const actions = [
  {
    id: 'createChallenge',
    value: 'Hackathon',
    url: null,
    action: fn(),
  },
  {
    id: 'createHiringChallenge',
    value: 'Hiring Challenge',
    url: null,
    action: fn(),
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
ButtonDropdownComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the dropdown button exists
  const button = canvas.getByRole('button', { name: /create/i });
  await expect(button).toBeInTheDocument();
  await expect(button).toHaveTextContent('Create');

  // Click to open dropdown
  await userEvent.click(button);

  // Verify dropdown options are visible
  const hackathonOption = canvas.getByText('Hackathon');
  const hiringOption = canvas.getByText('Hiring Challenge');
  await expect(hackathonOption).toBeInTheDocument();
  await expect(hiringOption).toBeInTheDocument();

  // Click an option
  await userEvent.click(hackathonOption);
};

export const ButtonDropdownStartsOpenComponent = <T,>(args: ActionsMenuInterface<T>) => (
  <ButtonDropdown {...args} />
);

ButtonDropdownStartsOpenComponent.storyName = 'Starts Open';
ButtonDropdownStartsOpenComponent.args = {
  ...ButtonDropdownComponent.args,
  startsOpen: true,
};
ButtonDropdownStartsOpenComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify dropdown options are visible immediately
  const hackathonOption = canvas.getByText('Hackathon');
  const hiringOption = canvas.getByText('Hiring Challenge');
  await expect(hackathonOption).toBeInTheDocument();
  await expect(hiringOption).toBeInTheDocument();

  // Click the button to close dropdown
  const button = canvas.getByRole('button', { name: /create/i });
  await userEvent.click(button);
};

export const ButtonDropdownDisabledComponent = <T,>(args: ActionsMenuInterface<T>) => (
  <ButtonDropdown {...args} />
);

ButtonDropdownDisabledComponent.storyName = 'Disabled';
ButtonDropdownDisabledComponent.args = {
  ...ButtonDropdownComponent.args,
  disabled: true,
};
ButtonDropdownDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the dropdown button exists and is disabled
  const button = canvas.getByRole('button', { name: /create/i });
  await expect(button).toBeInTheDocument();
  await expect(button).toBeDisabled();
};
