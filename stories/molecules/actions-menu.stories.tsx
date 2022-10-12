import React from 'react';
import { ActionsMenu } from '../../src';

export default {
  title: 'Components/Molecules/ActionsMenu',
  component: ActionsMenu,
  argTypes: {},
};

export const ActionsMenuOpenComponent = args => <ActionsMenu {...args} />;

const actions = [
  {
    id: 'actionDetails',
    type: 'default',
    value: 'Go to Details',
    url: null,
    action: () => {},
  },
  {
    id: 'disabledAction',
    type: 'disabled',
    value: 'Disabled Action',
    url: null,
    action: () => {},
  },
  {
    id: 'actionDelete',
    type: 'danger',
    value: 'Delete',
    url: null,
    action: () => {},
  },
];

ActionsMenuOpenComponent.storyName = 'Opened';
ActionsMenuOpenComponent.args = {
  ariaLabel: 'Open submenu',
  actions,
  startsOpen: true,
};

export const ActionsMenuClosedComponent = args => <ActionsMenu {...args} />;

ActionsMenuClosedComponent.storyName = 'Closed';
ActionsMenuClosedComponent.args = {
  ...ActionsMenuOpenComponent.args,
  startsOpen: false,
};
