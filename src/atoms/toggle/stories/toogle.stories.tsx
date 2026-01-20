import React, { useState, useEffect } from 'react';
import Toggle from '../index';
import { ToggleProps } from '../types';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/Toggle',
  component: Toggle,
};

export const ToggleComponent = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  useEffect(() => {
    setChecked(args.checked ?? false);
  }, [args.checked]);

  const handleClick = (value: boolean) => {
    setChecked(value);
    args.onClick?.(value);
  };

  return (
    <Toggle
      {...args}
      checked={checked}
      onClick={handleClick}
    />
  );
};

ToggleComponent.storyName = 'Toggle';
ToggleComponent.args = {
  checked: true,
  isLabelVisible: true,
  labelLeft: 'Off',
  labelRight: 'On',
  disabled: false,
  onClick: fn(),
};
ToggleComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: ToggleProps }) => {
  const canvas = within(canvasElement);

  // Verify labels are visible
  const offLabel = canvas.getByText('Off');
  const onLabel = canvas.getByText('On');
  await expect(offLabel).toBeInTheDocument();
  await expect(onLabel).toBeInTheDocument();

  // Get the toggle radiogroup
  const toggle = canvas.getByRole('radiogroup');
  await expect(toggle).toBeInTheDocument();

  // Click the "Off" label to toggle (starts checked/On, so click Off)
  await userEvent.click(offLabel);
  await expect(args.onClick).toHaveBeenCalled();

  // Click the "On" label to toggle back
  await userEvent.click(onLabel);
  await expect(args.onClick).toHaveBeenCalledTimes(2);
};

export const ToggleDisabledComponent = (args: ToggleProps) => {
  return <Toggle {...args} />;
};

ToggleDisabledComponent.storyName = 'Disabled';
ToggleDisabledComponent.args = {
  checked: false,
  isLabelVisible: true,
  labelLeft: 'Off',
  labelRight: 'On',
  disabled: true,
  onClick: fn(),
};
ToggleDisabledComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: ToggleProps }) => {
  const canvas = within(canvasElement);

  // Verify labels are visible
  const offLabel = canvas.getByText('Off');
  await expect(offLabel).toBeInTheDocument();

  // Verify disabled state - check radio inputs are disabled
  const radios = canvasElement.querySelectorAll('input[type="radio"]');
  await expect(radios[0]).toBeDisabled();
  await expect(radios[1]).toBeDisabled();
};

export const ToggleNoLabelsComponent = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Toggle
      {...args}
      checked={checked}
      onClick={(value: boolean) => setChecked(value)}
    />
  );
};

ToggleNoLabelsComponent.storyName = 'No Labels';
ToggleNoLabelsComponent.args = {
  checked: false,
  isLabelVisible: false,
  labelLeft: 'Off',
  labelRight: 'On',
  disabled: false,
};
ToggleNoLabelsComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // Verify labels are not visible when isLabelVisible is false
  const canvas = within(canvasElement);

  // Labels should not be in the document
  const offLabel = canvas.queryByText('Off');
  const onLabel = canvas.queryByText('On');
  await expect(offLabel).not.toBeInTheDocument();
  await expect(onLabel).not.toBeInTheDocument();

  // Toggle should work via the radio inputs
  const radios = canvasElement.querySelectorAll('input[type="radio"]');
  await expect(radios.length).toBe(2);
};
