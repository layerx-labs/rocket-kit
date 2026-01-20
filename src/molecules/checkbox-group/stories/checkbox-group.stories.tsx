import React, { useState } from 'react';
import CheckboxGroup, { CheckboxGroupProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Molecules/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['row', 'column'],
    },
  },
};

const checkboxButtons = [
  {
    label: 'Option 1',
    value: 'option_1',
    checked: null,
    disabled: false,
  },
  { label: 'Option 2', value: 'option_2', checked: null, disabled: false },
];

export const CheckboxGroupComponent = (args: CheckboxGroupProps) => {
  const [options, setOptions] = useState(args.options);

  const handleChange = (value: string, checked: boolean) => {
    setOptions(prev =>
      prev.map(opt =>
        opt.value === value ? { ...opt, checked } : opt
      )
    );
    args.onChange?.(value, checked);
  };

  return <CheckboxGroup {...args} options={options} onChange={handleChange} />;
};

CheckboxGroupComponent.storyName = 'CheckboxGroup';
CheckboxGroupComponent.args = {
  type: 'column',
  options: checkboxButtons,
  error: '',
  disabled: false,
  onChange: fn(),
};
CheckboxGroupComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: CheckboxGroupProps }) => {
  const canvas = within(canvasElement);

  // Verify both checkbox labels are present
  const label1 = canvas.getByText('Option 1');
  const label2 = canvas.getByText('Option 2');
  await expect(label1).toBeInTheDocument();
  await expect(label2).toBeInTheDocument();

  // Find the checkbox inputs
  const checkboxes = canvasElement.querySelectorAll('input[type="checkbox"]');
  const checkbox1 = checkboxes[0] as HTMLInputElement;
  const checkbox2 = checkboxes[1] as HTMLInputElement;

  // Verify initial unchecked state
  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).not.toBeChecked();

  // Click first checkbox label (click the label's parent which is the wrapping label element)
  await userEvent.click(label1);
  await expect(checkbox1).toBeChecked();
  await expect(args.onChange).toHaveBeenCalled();

  // Click second checkbox label
  await userEvent.click(label2);
  await expect(checkbox2).toBeChecked();

  // Uncheck first checkbox
  await userEvent.click(label1);
  await expect(checkbox1).not.toBeChecked();
};

export const CheckboxGroupRowComponent = (args: CheckboxGroupProps) => {
  const [options, setOptions] = useState(args.options);

  const handleChange = (value: string, checked: boolean) => {
    setOptions(prev =>
      prev.map(opt =>
        opt.value === value ? { ...opt, checked } : opt
      )
    );
  };

  return <CheckboxGroup {...args} options={options} onChange={handleChange} />;
};

CheckboxGroupRowComponent.storyName = 'Row Layout';
CheckboxGroupRowComponent.args = {
  type: 'row',
  options: checkboxButtons,
  error: '',
  disabled: false,
};
CheckboxGroupRowComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Find checkbox labels
  const label1 = canvas.getByText('Option 1');
  const label2 = canvas.getByText('Option 2');

  // Find the checkbox inputs
  const checkboxes = canvasElement.querySelectorAll('input[type="checkbox"]');
  const checkbox1 = checkboxes[0] as HTMLInputElement;
  const checkbox2 = checkboxes[1] as HTMLInputElement;

  // Click both checkbox labels
  await userEvent.click(label1);
  await userEvent.click(label2);

  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).toBeChecked();
};

export const CheckboxGroupWithErrorComponent = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};

CheckboxGroupWithErrorComponent.storyName = 'With Error';
CheckboxGroupWithErrorComponent.args = {
  type: 'column',
  options: checkboxButtons,
  error: 'Please select at least one option',
  disabled: false,
};
CheckboxGroupWithErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify error message is displayed
  const errorMessage = canvas.getByText('Please select at least one option');
  await expect(errorMessage).toBeInTheDocument();
};

export const CheckboxGroupDisabledComponent = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};

CheckboxGroupDisabledComponent.storyName = 'Disabled';
CheckboxGroupDisabledComponent.args = {
  type: 'column',
  options: checkboxButtons,
  error: '',
  disabled: true,
};
CheckboxGroupDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // Find the checkbox inputs
  const checkboxes = canvasElement.querySelectorAll('input[type="checkbox"]');
  const checkbox1 = checkboxes[0] as HTMLInputElement;
  const checkbox2 = checkboxes[1] as HTMLInputElement;

  // Verify checkboxes are disabled
  await expect(checkbox1).toBeDisabled();
  await expect(checkbox2).toBeDisabled();
};
