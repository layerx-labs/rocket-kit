import React, { useState } from 'react';
import CheckboxButton, { CheckboxButtonProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/Checkbox',
  component: CheckboxButton,
};

export const CheckboxButtonComponent = (args: CheckboxButtonProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <CheckboxButton
      {...args}
      checked={checked}
      onChange={e => {
        setChecked(e.target.checked);
        args.onChange?.(e);
      }}
    />
  );
};

CheckboxButtonComponent.storyName = 'Toggle Button';
CheckboxButtonComponent.args = {
  label: 'Value for Real',
  value: 'option_1',
  checked: false,
  className: 'checkbox-button',
  disabled: false,
  required: false,
  onChange: fn(),
};
CheckboxButtonComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: CheckboxButtonProps }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox button exists with correct label
  const checkbox = canvas.getByRole('checkbox', { name: /value for real/i });
  await expect(checkbox).toBeInTheDocument();

  // Verify initial unchecked state
  await expect(checkbox).not.toBeChecked();

  // Click to check
  await userEvent.click(checkbox);
  await expect(checkbox).toBeChecked();
  await expect(args.onChange).toHaveBeenCalled();

  // Click to uncheck
  await userEvent.click(checkbox);
  await expect(checkbox).not.toBeChecked();
};

export const CheckboxButtonCheckedComponent = (args: CheckboxButtonProps) => {
  const [checked, setChecked] = useState(args.checked ?? true);

  return (
    <CheckboxButton
      {...args}
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

CheckboxButtonCheckedComponent.storyName = 'Initially Checked';
CheckboxButtonCheckedComponent.args = {
  label: 'Already Selected',
  value: 'option_checked',
  checked: true,
  className: 'checkbox-button',
  disabled: false,
  required: false,
};
CheckboxButtonCheckedComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox is initially checked
  const checkbox = canvas.getByRole('checkbox', { name: /already selected/i });
  await expect(checkbox).toBeChecked();

  // Toggle off
  await userEvent.click(checkbox);
  await expect(checkbox).not.toBeChecked();
};

export const CheckboxButtonDisabledComponent = (args: CheckboxButtonProps) => (
  <CheckboxButton {...args} />
);

CheckboxButtonDisabledComponent.storyName = 'Disabled';
CheckboxButtonDisabledComponent.args = {
  label: 'Disabled Option',
  value: 'option_disabled',
  checked: false,
  className: 'checkbox-button',
  disabled: true,
  required: false,
  onChange: fn(),
};
CheckboxButtonDisabledComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: CheckboxButtonProps }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox is disabled
  const checkbox = canvas.getByRole('checkbox', { name: /disabled option/i });
  await expect(checkbox).toBeInTheDocument();
  await expect(checkbox).toBeDisabled();

  // Click should not change state
  await userEvent.click(checkbox);
  await expect(checkbox).not.toBeChecked();
};

export const CheckboxButtonRequiredComponent = (args: CheckboxButtonProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <CheckboxButton
      {...args}
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

CheckboxButtonRequiredComponent.storyName = 'Required';
CheckboxButtonRequiredComponent.args = {
  label: 'Required Field',
  value: 'option_required',
  checked: false,
  className: 'checkbox-button',
  disabled: false,
  required: true,
};
CheckboxButtonRequiredComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox exists and has required attribute
  const checkbox = canvas.getByRole('checkbox', { name: /required field/i });
  await expect(checkbox).toBeInTheDocument();
  await expect(checkbox).toBeRequired();
};
