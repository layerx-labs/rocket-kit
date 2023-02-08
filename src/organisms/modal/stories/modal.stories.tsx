import React, { useState } from 'react';
import { ModalProps } from '..';
import { Button, Modal, ModalFooter } from '../../..';

export default {
  title: 'Components/Organisms/Modal',
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
  footer: true,
  closeValue: 'Close',
  isShowing: true,
};

export const ModalEditorComponent = (args: ModalProps) => {
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
};
