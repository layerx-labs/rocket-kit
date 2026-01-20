import React, { useState } from 'react';
import Checkbox, { CheckboxProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
};

export const CheckboxSimpleComponent = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={e => {
        setChecked(e.target.checked);
        args.onChange?.(e);
      }}
    />
  );
};

CheckboxSimpleComponent.storyName = 'Simple';
CheckboxSimpleComponent.args = {
  label: 'Option 1',
  value: 'option_1',
  className: 'checkbox',
  checked: true,
  disabled: false,
  error: false,
  onChange: fn(),
};
CheckboxSimpleComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: CheckboxProps }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox exists with correct label
  const checkbox = canvas.getByRole('checkbox', { name: /option 1/i });
  await expect(checkbox).toBeInTheDocument();

  // Verify initial checked state
  await expect(checkbox).toBeChecked();

  // Click to uncheck
  await userEvent.click(checkbox);
  await expect(checkbox).not.toBeChecked();
  await expect(args.onChange).toHaveBeenCalled();

  // Click to check again
  await userEvent.click(checkbox);
  await expect(checkbox).toBeChecked();
};

export const CheckboxUncheckedComponent = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={e => {
        setChecked(e.target.checked);
        args.onChange?.(e);
      }}
    />
  );
};

CheckboxUncheckedComponent.storyName = 'Unchecked';
CheckboxUncheckedComponent.args = {
  label: 'Unchecked Option',
  value: 'unchecked_option',
  className: 'checkbox',
  checked: false,
  disabled: false,
  error: false,
  onChange: fn(),
};
CheckboxUncheckedComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: CheckboxProps }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox exists
  const checkbox = canvas.getByRole('checkbox', { name: /unchecked option/i });
  await expect(checkbox).toBeInTheDocument();

  // Verify initial unchecked state
  await expect(checkbox).not.toBeChecked();

  // Click to check
  await userEvent.click(checkbox);
  await expect(checkbox).toBeChecked();
  await expect(args.onChange).toHaveBeenCalled();
};

export const CheckboxDisabledComponent = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

CheckboxDisabledComponent.storyName = 'Disabled';
CheckboxDisabledComponent.args = {
  label: 'Disabled Option',
  value: 'disabled_option',
  className: 'checkbox',
  checked: false,
  disabled: true,
  error: false,
  onChange: fn(),
};
CheckboxDisabledComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: CheckboxProps }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox exists and is disabled
  const checkbox = canvas.getByRole('checkbox', { name: /disabled option/i });
  await expect(checkbox).toBeInTheDocument();
  await expect(checkbox).toBeDisabled();

  // Click should not change the state
  await userEvent.click(checkbox);
  await expect(checkbox).not.toBeChecked();
};

export const CheckboxWithErrorComponent = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

CheckboxWithErrorComponent.storyName = 'With Error';
CheckboxWithErrorComponent.args = {
  label: 'Error Option',
  value: 'error_option',
  className: 'checkbox',
  checked: false,
  disabled: false,
  error: true,
};
CheckboxWithErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the checkbox exists
  const checkbox = canvas.getByRole('checkbox', { name: /error option/i });
  await expect(checkbox).toBeInTheDocument();

  // Verify error styling is applied (wrapper has error class)
  const wrapper = canvasElement.querySelector('[class*="hasError"]');
  await expect(wrapper).toBeInTheDocument();
};

export const CheckboxNodeComponent = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      label={
        <>
          I agree with <a href="#0">Terms of Service</a> and{' '}
          <a href="#0">Privacy Policy</a> of TAIKAI
        </>
      }
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

CheckboxNodeComponent.storyName = 'With links';
CheckboxNodeComponent.args = {
  value: 'option_1',
  className: 'checkbox',
  checked: false,
  disabled: false,
  error: false,
};
CheckboxNodeComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify links are present
  const termsLink = canvas.getByText('Terms of Service');
  const privacyLink = canvas.getByText('Privacy Policy');
  await expect(termsLink).toBeInTheDocument();
  await expect(privacyLink).toBeInTheDocument();

  // Verify the checkbox can be toggled
  const checkbox = canvas.getByRole('checkbox');
  await expect(checkbox).not.toBeChecked();
  await userEvent.click(checkbox);
  await expect(checkbox).toBeChecked();
};
