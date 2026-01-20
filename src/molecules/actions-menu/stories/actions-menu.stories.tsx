import React from 'react';
import ActionsMenu, {
  ActionsMenuInterface,
  ActionsMenuListInterface,
} from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Molecules/ActionsMenu',
  component: ActionsMenu,
  argTypes: {},
};

type MyActionsMenuListInterface = ActionsMenuListInterface<{
  id: string;
  type: string;
  value: string;
  url: string | null;
  action: () => void;
}>;

const actions = [
  {
    id: 'actionDetails',
    type: 'default',
    value: 'Go to Details',
    url: null,
    action: fn(),
  },
  {
    id: 'disabledAction',
    type: 'disabled',
    value: 'Disabled Action',
    url: null,
    action: fn(),
  },
  {
    id: 'actionDelete',
    type: 'danger',
    value: 'Delete',
    url: null,
    action: fn(),
  },
];

export const ActionsMenuOpenComponent = (
  args: ActionsMenuInterface<MyActionsMenuListInterface>
) => <ActionsMenu {...args} />;

ActionsMenuOpenComponent.storyName = 'Opened';
ActionsMenuOpenComponent.args = {
  ariaLabel: 'Open submenu',
  actions,
  startsOpen: true,
};
ActionsMenuOpenComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify menu items are visible when startsOpen is true
  const detailsOption = canvas.getByText('Go to Details');
  const disabledOption = canvas.getByText('Disabled Action');
  const deleteOption = canvas.getByText('Delete');

  await expect(detailsOption).toBeInTheDocument();
  await expect(disabledOption).toBeInTheDocument();
  await expect(deleteOption).toBeInTheDocument();

  // Click on a menu item
  await userEvent.click(detailsOption);
};

export const ActionsMenuClosedComponent = (
  args: ActionsMenuInterface<MyActionsMenuListInterface>
) => <ActionsMenu {...args} />;

ActionsMenuClosedComponent.storyName = 'Closed';
ActionsMenuClosedComponent.args = {
  ariaLabel: 'Open submenu',
  actions,
  startsOpen: false,
};
ActionsMenuClosedComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Find the menu trigger button
  const menuButton = canvas.getByRole('button', { name: /open submenu/i });
  await expect(menuButton).toBeInTheDocument();

  // Click to open menu
  await userEvent.click(menuButton);

  // Verify menu items are now visible
  const detailsOption = await canvas.findByText('Go to Details');
  await expect(detailsOption).toBeInTheDocument();

  // Click on details option
  await userEvent.click(detailsOption);
};

export const ActionsMenuWithDisabledComponent = (
  args: ActionsMenuInterface<MyActionsMenuListInterface>
) => <ActionsMenu {...args} />;

ActionsMenuWithDisabledComponent.storyName = 'With Disabled Item';
ActionsMenuWithDisabledComponent.args = {
  ariaLabel: 'Open submenu',
  actions,
  startsOpen: true,
};
ActionsMenuWithDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify disabled item is visible
  const disabledOption = canvas.getByText('Disabled Action');
  await expect(disabledOption).toBeInTheDocument();

  // Verify danger item styling
  const deleteOption = canvas.getByText('Delete');
  await expect(deleteOption).toBeInTheDocument();
};
