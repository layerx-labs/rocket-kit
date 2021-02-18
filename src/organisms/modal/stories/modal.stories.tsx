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
  focus: false,
  focusModeValue: 'Focus Mode',
  isShowing: true,
};

interface ModalEditorComponentProps extends ModalProps {
  showFocusButton: boolean;
  focusModeValue: string;
}

export const ModalEditorComponent = (args: ModalEditorComponentProps) => {
  const [focus, setFocus] = useState(args.focus);
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div>
      {!isShowing && (
        <Button
          value={'Open Modal'}
          action={() => {
            setIsShowing(!isShowing);
          }}
        />
      )}
      <Modal
        {...args}
        isShowing={isShowing}
        focus={focus}
        hide={() => {
          setIsShowing(false);
        }}
      >
        <textarea style={{ minHeight: 60, width: '100%' }}>
          Random text
        </textarea>
        <ModalFooter
          closeValue={'Cancel'}
          closeAction={() => {
            setIsShowing(false);
          }}
          focusMode={args.showFocusButton}
          focusModeValue={args.focusModeValue}
          focusModeAction={() => {
            setFocus(!focus);
          }}
        >
          <Button
            type="submit"
            value={'Save'}
            action={() => {
              setIsShowing(false);
            }}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalEditorComponent.storyName = 'Modal Editor';
ModalEditorComponent.args = {
  title: 'Checkout',
  focusModeValue: 'Focus Mode',
  closeValue: 'Cancel',
  focus: false,
  showFocusButton: true,
};
