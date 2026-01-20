import React, { useState } from 'react';
import { ModalDrawerProps } from '..';
import { Button, ModalDrawer, ModalFooter } from '../../..';
import { expect, within, userEvent, fn, screen } from 'storybook/test';

export default {
  title: 'Components/Organisms/Modal',
  component: ModalDrawer,
  argTypes: {},
};

export const ModalDrawerComponent = (args: ModalDrawerProps) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <Button
        value={'Open Modal'}
        action={() => {
          setIsShowing(!isShowing);
        }}
      />
      <ModalDrawer
        {...args}
        isShowing={isShowing}
        hide={() => {
          setIsShowing(false);
          args.hide?.();
        }}
        footer={
          <ModalFooter
            closeValue={'Close'}
            closeAction={() => {
              setIsShowing(false);
            }}
          >
            <Button
              type="submit"
              value={'Checkout'}
              action={() => {
                setIsShowing(false);
              }}
            />
          </ModalFooter>
        }
      >
        <p>
          I'm baby tofu man bun readymade, chartreuse vexillologist pok pok
          retro sriracha drinking vinegar pinterest tumblr lyft venmo vape woke.
        </p>
      </ModalDrawer>
    </div>
  );
};

ModalDrawerComponent.storyName = 'Drawer';
ModalDrawerComponent.args = {
  title: 'Voting Cart Checkout',
  closeValue: 'Close',
  footerHidden: false,
  hide: fn(),
};
ModalDrawerComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: ModalDrawerProps }) => {
  const canvas = within(canvasElement);

  // Find and click the open button
  const openButton = canvas.getByRole('button', { name: /open modal/i });
  await expect(openButton).toBeInTheDocument();

  await userEvent.click(openButton);

  // Wait for drawer to appear and verify title (drawer renders in portal, use screen)
  const drawerTitle = await screen.findByText('Voting Cart Checkout');
  await expect(drawerTitle).toBeInTheDocument();

  // Verify drawer content (in portal)
  const content = screen.getByText(/I'm baby tofu man bun/i);
  await expect(content).toBeInTheDocument();

  // Verify checkout button (in portal)
  const checkoutButton = screen.getByRole('button', { name: /checkout/i });
  await expect(checkoutButton).toBeInTheDocument();

  // Click checkout button to close (this closes via state, not hide callback)
  await userEvent.click(checkoutButton);
};

export const ModalDrawerCustomFooterComponent = (args: ModalDrawerProps) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <Button
        value={'Open Modal'}
        action={() => {
          setIsShowing(!isShowing);
        }}
      />
      <ModalDrawer
        {...args}
        isShowing={isShowing}
        hide={() => {
          setIsShowing(false);
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <p>
            I'm baby tofu man bun readymade, chartreuse vexillologist pok pok
            retro sriracha drinking vinegar pinterest tumblr lyft venmo vape
            woke.
          </p>
          <ModalFooter
            closeValue={'Close'}
            closeAction={() => {
              setIsShowing(false);
            }}
          >
            <Button
              type="submit"
              value={'Checkout'}
              action={() => {
                setIsShowing(false);
              }}
            />
            <Button
              type="submit"
              value={'Submit'}
              action={() => {
                setIsShowing(false);
              }}
            />
          </ModalFooter>
        </div>
      </ModalDrawer>
    </div>
  );
};

ModalDrawerCustomFooterComponent.storyName = 'Drawer custom footer';
ModalDrawerCustomFooterComponent.args = {
  title: 'Voting Cart Checkout',
  closeValue: 'Close',
  footerHidden: true,
};
ModalDrawerCustomFooterComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Open drawer
  const openButton = canvas.getByRole('button', { name: /open modal/i });
  await userEvent.click(openButton);

  // Wait for drawer (drawer renders in portal, use screen)
  const drawerTitle = await screen.findByText('Voting Cart Checkout');
  await expect(drawerTitle).toBeInTheDocument();

  // Verify custom footer buttons (in portal)
  const checkoutButton = screen.getByRole('button', { name: /checkout/i });
  const submitButton = screen.getByRole('button', { name: /submit/i });
  await expect(checkoutButton).toBeInTheDocument();
  await expect(submitButton).toBeInTheDocument();

  // Click submit
  await userEvent.click(submitButton);
};

export const ModalDrawerOpenedComponent = (args: ModalDrawerProps) => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div>
      <Button
        value={'Toggle Modal'}
        action={() => {
          setIsShowing(!isShowing);
        }}
      />
      <ModalDrawer
        {...args}
        isShowing={isShowing}
        hide={() => {
          setIsShowing(false);
        }}
        footer={
          <ModalFooter
            closeValue={'Close'}
            closeAction={() => {
              setIsShowing(false);
            }}
          >
            <Button
              type="submit"
              value={'Confirm'}
              action={() => {
                setIsShowing(false);
              }}
            />
          </ModalFooter>
        }
      >
        <p>This drawer starts in the open state.</p>
      </ModalDrawer>
    </div>
  );
};

ModalDrawerOpenedComponent.storyName = 'Initially Open';
ModalDrawerOpenedComponent.args = {
  title: 'Started Open',
  closeValue: 'Close',
  footerHidden: false,
};
ModalDrawerOpenedComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // Drawer should be open immediately (drawer renders in portal, use screen)
  const drawerTitle = await screen.findByText('Started Open');
  await expect(drawerTitle).toBeInTheDocument();

  // Verify content (in portal)
  const content = screen.getByText(/This drawer starts in the open state/i);
  await expect(content).toBeInTheDocument();

  // Close the drawer (in portal)
  const closeButton = screen.getByRole('button', { name: /close/i });
  await userEvent.click(closeButton);
};
