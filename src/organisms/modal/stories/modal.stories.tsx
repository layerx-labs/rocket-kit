import React, { useState } from 'react';
import { ModalProps } from '..';
import { Button, Modal, ModalFooter } from '../../..';

export default {
  title: 'Design System/Organisms/Modal',
  component: Modal,
  argTypes: {},
};

export const ModalComponentBase = (args: ModalProps) => (
  <Modal {...args}>
    <p>
      "Jerky ground round corned beef shank shoulder. Corned beef chislic
      landjaeger, salami ham hock strip steak chicken rump turducken doner ball
      tip porchetta pork chop."
    </p>
  </Modal>
);

ModalComponentBase.storyName = 'Simple';
ModalComponentBase.args = {
  title: 'Checkout',
  closeValue: 'Cancel',
  focus: true,
  focusModeValue: 'Focus Mode',
  isShowing: true,
};

export const ModalEditorComponent = (args: ModalProps) => {
  const [focus, setFocus] = useState(args.focus);

  return (
    <Modal {...args} focus>
      <textarea style={{minHeight: 200, width: "100%"}}/>
      <ModalFooter
        closeValue={'Cancel'}
        closeAction={() => {}}
        focusMode={args.focus}
        focusModeValue={'Focus Value'}
        focusModeAction={() => {
          setFocus(!focus);
        }}
      >
        <Button type="submit" value={'Save'} action={() => {}} />
      </ModalFooter>
    </Modal>
  );
};

ModalEditorComponent.storyName = 'Modal Editor';
ModalEditorComponent.args = {
  title: 'Checkout',
  focusModeValue: 'Focus Mode',
  closeValue: 'Cancel',
  focus: false,
  isShowing: false,
};
