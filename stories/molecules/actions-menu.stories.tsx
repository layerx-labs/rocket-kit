import React from 'react';
import { ActionsMenu } from '../../src';
import { expect, jest } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Components/Molecules/ActionsMenu',
  component: ActionsMenu,
  argTypes: {},
};

export const ActionsMenuOpenComponent = args => <ActionsMenu {...args} />;

const mockActionDetails = jest.fn();
const mockDisabledAction = jest.fn();
const mockActionDelete = jest.fn();

const actions = [
  {
    id: 'actionDetails',
    type: 'default',
    value: 'Go to Details',
    url: null,
    action: mockActionDetails,
  },
  {
    id: 'disabledAction',
    type: 'disabled',
    value: 'Disabled Action',
    url: null,
    action: mockDisabledAction,
  },
  {
    id: 'actionDelete',
    type: 'danger',
    value: 'Delete',
    url: null,
    action: mockActionDelete,
  },
];

ActionsMenuOpenComponent.storyName = 'Opened';
ActionsMenuOpenComponent.args = {
  ariaLabel: 'Open submenu',
  actions,
  startsOpen: true,
};
ActionsMenuOpenComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuButton = canvas.getByTestId('action-menu-button');

  const actionDetails = () =>
    canvas.getByTestId('li-action-menu-actionDetails');
  const disabledAction = () =>
    canvas.getByTestId('li-action-menu-disabledAction');
  const actionDelete = () => canvas.getByTestId('li-action-menu-actionDelete');

  expect(actionDetails()).toHaveTextContent('Go to Details');
  expect(disabledAction()).toHaveTextContent('Disabled Action');
  expect(actionDelete()).toHaveTextContent('Delete');

  userEvent.click(actionDetails().firstElementChild);
  expect(mockActionDetails).toHaveBeenCalledTimes(1);

  userEvent.click(menuButton);
  expect(disabledAction().firstElementChild).toHaveStyle({
    'pointer-events': 'none',
  });

  userEvent.click(actionDelete().firstElementChild);
  expect(mockActionDelete).toHaveBeenCalledTimes(1);

  userEvent.click(menuButton);
};

export const ActionsMenuClosedComponent = args => <ActionsMenu {...args} />;

ActionsMenuClosedComponent.storyName = 'Closed';
ActionsMenuClosedComponent.args = {
  ...ActionsMenuOpenComponent.args,
  startsOpen: false,
};
