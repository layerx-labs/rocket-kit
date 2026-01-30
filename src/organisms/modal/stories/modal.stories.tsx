import React, { useState } from 'react';
import { ModalProps } from '..';
import { Button, Modal, ModalFooter } from '../../..';
import { expect, within, userEvent, fn, screen } from 'storybook/test';

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
          args.hide?.();
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
  hide: fn(),
};
ModalComponentBase.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: ModalProps }) => {
  const canvas = within(canvasElement);

  // Find and click the open button
  const openButton = canvas.getByRole('button', { name: /open modal/i });
  await expect(openButton).toBeInTheDocument();

  await userEvent.click(openButton);

  // Wait for modal to appear and verify title (modal renders in portal, use screen)
  const modalTitle = await screen.findByText('Checkout');
  await expect(modalTitle).toBeInTheDocument();

  // Verify modal content
  const content = screen.getByText(/jerky ground round/i);
  await expect(content).toBeInTheDocument();

  // Find and click close button in footer (not the X icon button in header)
  // The footer close button has text content "Close", while the X button has aria-label="Close"
  const allCloseButtons = screen.getAllByRole('button', { name: /close/i });
  // The footer button is the one with text content, filter by checking for span child
  const closeButton = allCloseButtons.find(btn => btn.querySelector('span'));
  await expect(closeButton).toBeDefined();
  await userEvent.click(closeButton!);
  await expect(args.hide).toHaveBeenCalled();
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
        <textarea style={{ minHeight: 60, width: '100%' }} defaultValue="Random text" />
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
ModalEditorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Open modal
  const openButton = canvas.getByRole('button', { name: /open modal/i });
  await userEvent.click(openButton);

  // Wait for modal to appear (modal renders in portal, use screen)
  const modalTitle = await screen.findByText('Checkout');
  await expect(modalTitle).toBeInTheDocument();

  // Verify textarea is present (in portal)
  const textarea = screen.getByRole('textbox');
  await expect(textarea).toBeInTheDocument();

  // Type in textarea
  await userEvent.clear(textarea);
  await userEvent.type(textarea, 'New content');
  await expect(textarea).toHaveValue('New content');

  // Click save button (in portal)
  const saveButton = screen.getByRole('button', { name: /save/i });
  await userEvent.click(saveButton);
};

export const ModalWithCustomFooterComponent = (args: ModalProps) => {
  const [isShowing, setIsShowing] = useState(true);
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
        <p>Modal with custom footer buttons</p>
        <ModalFooter
          closeValue={'Cancel'}
          closeAction={() => {
            setIsShowing(false);
          }}
        >
          <Button
            variant="outline"
            value={'Secondary'}
            action={() => {}}
          />
          <Button
            type="submit"
            value={'Primary'}
            action={() => {
              setIsShowing(false);
            }}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalWithCustomFooterComponent.storyName = 'With Custom Footer';
ModalWithCustomFooterComponent.args = {
  title: 'Custom Footer Modal',
};
ModalWithCustomFooterComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // Modal should be open by default (modal renders in portal, use screen)
  const modalTitle = await screen.findByText('Custom Footer Modal');
  await expect(modalTitle).toBeInTheDocument();

  // Verify all footer buttons (in portal)
  const cancelButton = screen.getByRole('button', { name: /cancel/i });
  const secondaryButton = screen.getByRole('button', { name: /secondary/i });
  const primaryButton = screen.getByRole('button', { name: /primary/i });

  await expect(cancelButton).toBeInTheDocument();
  await expect(secondaryButton).toBeInTheDocument();
  await expect(primaryButton).toBeInTheDocument();

  // Click primary to close
  await userEvent.click(primaryButton);
};
