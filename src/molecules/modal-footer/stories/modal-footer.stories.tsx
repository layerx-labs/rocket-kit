import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import ModalFooter, { ModalFooterProps } from '..';
import { Button } from '../../..';
import { expect, jest } from '@storybook/jest';

export default {
  title: 'Components/Molecules/Modal Footer',
  component: ModalFooter,
  argTypes: {},
};

export const ModalFooterComponentNoChildren: ComponentStory<
  typeof ModalFooter
> = (args: ModalFooterProps) => <ModalFooter {...args} />;

const mockedCloseAction = jest.fn();
ModalFooterComponentNoChildren.storyName = 'No children';
ModalFooterComponentNoChildren.args = {
  closeValue: 'Cancel',
  dataTestId: 'footer',
  closeAction: mockedCloseAction,
};
ModalFooterComponentNoChildren.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const footer = canvas.getByTestId('footer');
  expect(footer).toBeVisible();

  expect(mockedCloseAction).toHaveBeenCalledTimes(0);
  userEvent.click(canvas.getByRole('button'));
  expect(mockedCloseAction).toHaveBeenCalledTimes(1);
};

export const ModalFooterComponentChildren: ComponentStory<typeof ModalFooter> =
  (args: ModalFooterProps) => (
    <ModalFooter {...args}>
      <Button type="submit" value="save" dataTestId="children" />
    </ModalFooter>
  );

ModalFooterComponentChildren.storyName = 'With children';
ModalFooterComponentChildren.args = {
  closeValue: 'Abort',
};
ModalFooterComponentChildren.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const children = canvas.getByTestId('children');
  // Make sure the children have rendered
  expect(children).toBeVisible();
};
