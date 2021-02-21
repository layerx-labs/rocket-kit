import React, { useState } from 'react';
import { ModalDrawerProps } from '..';
import { Button, ModalDrawer, ModalFooter } from '../../..';

export default {
  title: 'Design System/Organisms/Modal',
  component: ModalDrawer,
  argTypes: {},
};

export const ModalDrawerComponent = (args: ModalDrawerProps) => {
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
};
