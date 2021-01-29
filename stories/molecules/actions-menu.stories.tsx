import React from 'react';
import { ActionsMenu } from '../../src';

export default {
  title: 'Design System/Molecules/ActionsMenu',
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
    id: 'actionDelete',
    type: 'danger',
    value: 'Delete',
    url: null,
    action: () => {},
  },
];

ActionsMenuOpenComponent.args = {
  actions,
  startsOpen: true,
};

export const ActionsMenuClosedComponent = args => <ActionsMenu {...args} />;

ActionsMenuClosedComponent.args = {
  actions,
  startsOpen: false,
};
