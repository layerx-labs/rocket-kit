import { ComponentStory } from '@storybook/react';
import { userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import React, { useState } from 'react';
import { ModalProps } from '..';
import { Button, Modal, ModalFooter } from '../../..';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
  argTypes: {},
};

export const ModalComponentBase: ComponentStory<typeof Modal> = (
  args: ModalProps
) => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <>
      <Button
        value="Open modal"
        dataTestId="open-modal"
        action={() => setIsShowing(true)}
      />
      <Modal {...args} isShowing={isShowing} hide={() => setIsShowing(false)}>
        <p>
          "Jerky ground round corned beef shank shoulder. Corned beef chislic
          landjaeger, salami ham hock strip steak chicken rump turducken doner
          ball tip porchetta pork chop."
        </p>
      </Modal>
    </>
  );
};

ModalComponentBase.storyName = 'Simple';
ModalComponentBase.args = {
  title: 'Checkout',
  footer: true,
  closeValue: 'Close',
  dataTestId: 'modal',
};
ModalComponentBase.play = async () => {
  // hide it, make sure it's not visible
  userEvent.click(screen.getByTestId('modal-footer-button'));
  expect(screen.queryByText('Checkout')).not.toBeInTheDocument();

  // open it, make sure it is visible
  userEvent.click(screen.getByTestId('open-modal'));
  expect(screen.queryByText('Checkout')).toBeVisible();
};

export const ModalEditorComponent = (args: ModalProps) => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div>
      {!isShowing && (
        <Button
          dataTestId="open-modal"
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
        <textarea
          data-testid="textarea"
          style={{ minHeight: 60, width: '100%' }}
        >
          Random text
        </textarea>
        <ModalFooter
          dataTestId="modal-footer"
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
ModalEditorComponent.play = async () => {
  // make sure default text is visible
  expect(screen.getByTestId('textarea')).toHaveValue('Random text');

  // make sure that the text is editable
  userEvent.clear(screen.getByTestId('textarea'));
  userEvent.type(screen.getByTestId('textarea'), 'typing test');
  expect(screen.getByTestId('textarea')).toHaveValue('typing test');

  // make sure the text is reset after modal reopen
  userEvent.click(screen.getByTestId('modal-footer-button'));
  userEvent.click(screen.getByTestId('open-modal'));
  expect(screen.getByTestId('textarea')).toHaveValue('Random text');
};
