import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';
import Toggle from '../index';
import { ToggleProps } from '../types';

export default {
  title: 'Components/Atoms/Toggle',
  component: Toggle,
};

export const ToggleComponent: ComponentStory<typeof Toggle> = (
  args: ToggleProps
) => <Toggle {...args} />;

ToggleComponent.storyName = 'Toggle';
ToggleComponent.args = {
  checked: true,
  isLabelVisible: true,
  labelLeft: 'Off',
  labelRight: 'On',
  disabled: false,
  dataTestId: 'toggle',
};
ToggleComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchOn = canvas.getByTestId('toggle-switch-on');
  const switchOff = canvas.getByTestId('toggle-switch-off');
  const bgSpan = canvas.getByTestId('toggle-bg');

  // Make sure that it is on
  expect(switchOn).toBeChecked();
  expect(switchOff).not.toBeChecked();
  const bgColorOn = getComputedStyle(bgSpan).backgroundColor;

  // toggle to off
  await userEvent.click(switchOff);

  // wait for animation to finish
  await waitFor(
    async () => {
      // Make sure it's off
      await expect(switchOn).not.toBeChecked();
      await expect(switchOff).toBeChecked();
      const bgColorOff = getComputedStyle(
        canvas.getByTestId('toggle-bg')
      ).backgroundColor;

      // make sure color has changed
      await expect(bgColorOff).not.toEqual(bgColorOn);
    },
    { timeout: 300 }
  );

  // switch back on
  userEvent.click(switchOn);
};
