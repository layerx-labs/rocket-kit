import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
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

export const AlertNotificationComponent: ComponentStory<
  typeof AlertNotification
> = (args: AlertNotificationProps) => <AlertNotification {...args} />;

const mockedAction = jest.fn();
AlertNotificationComponent.storyName = 'Alert';
AlertNotificationComponent.args = {
  className: 'open',
  variant: 'success',
  value: 'This is your amiga speaking...',
  closeAction: mockedAction,
  dataTestId: 'alert',
};

AlertNotificationComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByTestId('alert')).toHaveTextContent(
    AlertNotificationComponent.args!.value!
  );
  expect(mockedAction).toHaveBeenCalledTimes(0);
  userEvent.click(canvas.getByRole('button'));
  expect(mockedAction).toHaveBeenCalledTimes(1);
};
