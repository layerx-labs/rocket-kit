import React from 'react';
import ModalFooter, { ModalFooterProps } from '..';
import { Button } from '../../..';

export default {
  title: 'Components/Molecules/Modal Footer',
  component: ModalFooter,
  argTypes: {},
};

export const ModalFooterComponentNoChildren = (args: ModalFooterProps) => (
  <ModalFooter {...args} />
);

ModalFooterComponentNoChildren.storyName = 'No children';
ModalFooterComponentNoChildren.args = {
  closeValue: 'Cancel',
};

export const ModalFooterComponentChildren = (args: ModalFooterProps) => (
  <ModalFooter {...args}>
    <Button type="submit" value="save" />
  </ModalFooter>
);

ModalFooterComponentChildren.storyName = 'With children';
ModalFooterComponentChildren.args = {
  closeValue: 'Abort',
};
