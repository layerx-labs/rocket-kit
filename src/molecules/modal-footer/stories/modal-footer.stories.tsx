import React from 'react';
import ModalFooter, { ModalFooterProps } from '..';
import { Button } from '../../..';

export default {
  title: 'Design System/Molecules/Modal Footer',
  component: ModalFooter,
  argTypes: {},
};

export const ModalFooterComponentNoChildren = (args: ModalFooterProps) => (
  <ModalFooter {...args} />
);

ModalFooterComponentNoChildren.storyName = 'No children';
ModalFooterComponentNoChildren.args = {
  closeValue: 'Cancel',
  focusMode: false,
  focusModeValue: 'Focus Mode',
};

export const ModalFooterComponentNoFocus = (args: ModalFooterProps) => (
  <ModalFooter {...args}>
    <Button type="submit" value="save" />
  </ModalFooter>
);

ModalFooterComponentNoFocus.storyName = 'Without Focus';
ModalFooterComponentNoFocus.args = {
  closeValue: 'Cancel',
  focusMode: false,
  focusModeValue: 'Focus Mode',
};

export const ModalFooterComponentFocus = (args: ModalFooterProps) => (
  <ModalFooter {...args}>
    <Button type="submit" value="save" />
  </ModalFooter>
);

ModalFooterComponentFocus.storyName = 'With Focus';
ModalFooterComponentFocus.args = {
  closeValue: 'Abort',
  focusMode: true,
  focusModeValue: 'Focus Mode',
};
