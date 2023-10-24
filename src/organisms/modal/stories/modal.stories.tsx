import React, { useState } from 'react';
import { ModalProps } from '..';
import { Button, Modal, ModalFooter } from '../../..';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
  argTypes: {},
};

export const ModalComponentBase = (args: ModalProps) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div>
      <Button
        value={'Open Modal'}
        action={() => {
          setIsShowing(!isShowing);
        }}
      />
      <Modal
        {...args}
        isShowing={isShowing}
        hide={() => {
          setIsShowing(false);
        }}
      >
        <p>
          "Jerky ground round corned beef shank shoulder. Corned beef chislic
          landjaeger, salami ham hock strip steak chicken rump turducken doner
          ball tip porchetta pork chop."
        </p>
      </Modal>
    </div>
  );
};

ModalComponentBase.storyName = 'Simple';
ModalComponentBase.args = {
  title: 'Checkout',
  footer: true,
  closeValue: 'Close',
  isShowing: false,
};

export const ModalEditorComponent = (args: ModalProps) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <Button
        value={'Open Modal'}
        action={() => {
          setIsShowing(!isShowing);
        }}
      />
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
