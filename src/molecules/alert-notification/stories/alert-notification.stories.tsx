import React from 'react';
import AlertNotification, { AlertNotificationProps } from '..';

export default {
  title: 'Components/Molecules/Alert',
  component: AlertNotification,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['success', 'orange', 'red'],
      },
    },
  },
};

export const AlertNotificationComponent = (args: AlertNotificationProps) => (
  <AlertNotification {...args} />
);

AlertNotificationComponent.storyName = 'Alert';
AlertNotificationComponent.args = {
  className: 'open',
  variant: 'success',
  value: 'This is your amiga speaking...',
  closeAction: () => {},
};
