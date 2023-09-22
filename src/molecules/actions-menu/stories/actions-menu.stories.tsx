import React from 'react';
import ActionsMenu, {
  ActionsMenuInterface,
  ActionsMenuListInterface,
} from '..';

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

export const ActionsMenuOpenComponent = (
  args: ActionsMenuInterface<MyActionsMenuListInterface>
) => <ActionsMenu {...args} />;

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

export const ActionsMenuClosedComponent = (
  args: ActionsMenuInterface<MyActionsMenuListInterface>
) => <ActionsMenu {...args} />;

ActionsMenuClosedComponent.storyName = 'Closed';
ActionsMenuClosedComponent.args = {
  ...ActionsMenuOpenComponent.args,
  startsOpen: false,
};

ActionsMenuClosedComponent.storyName = 'Closed';
ActionsMenuClosedComponent.args = {
  ...ActionsMenuOpenComponent.args,
  startsOpen: false,
};
