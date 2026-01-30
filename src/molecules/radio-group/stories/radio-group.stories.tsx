import React, { useState } from 'react';
import RadioGroup, { RadioGroupProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Molecules/RadioGroup',
  component: RadioGroup,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['row', 'column'],
    },
  },
};

const radioButtons = [
  {
    value: 'option_1',
    label: 'Option 1',
    disabled: false,
    checked: undefined,
  },
  { value: 'option_2', label: 'Option 2', disabled: false, checked: undefined },
];

export const RadioGroupComponent = (args: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    args.onChange?.(event);
  };

  const optionsWithChecked = args.options.map(opt => ({
    ...opt,
    checked: opt.value === selectedValue,
  }));

  return <RadioGroup {...args} options={optionsWithChecked} onChange={handleChange} />;
};

RadioGroupComponent.storyName = 'RadioGroup';
RadioGroupComponent.args = {
  type: 'column',
  group: 'test',
  options: radioButtons,
  error: '',
  disabled: false,
  onChange: fn(),
};
RadioGroupComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: RadioGroupProps }) => {
  const canvas = within(canvasElement);

  // Verify both radio labels are present
  const label1 = canvas.getByText('Option 1');
  const label2 = canvas.getByText('Option 2');
  await expect(label1).toBeInTheDocument();
  await expect(label2).toBeInTheDocument();

  // Find radio inputs
  const radios = canvasElement.querySelectorAll('input[type="radio"]');
  const radio1 = radios[0] as HTMLInputElement;
  const radio2 = radios[1] as HTMLInputElement;

  // Verify initial state - none selected
  await expect(radio1).not.toBeChecked();
  await expect(radio2).not.toBeChecked();

  // Click first radio label
  await userEvent.click(label1);
  await expect(radio1).toBeChecked();
  await expect(radio2).not.toBeChecked();
  await expect(args.onChange).toHaveBeenCalled();

  // Click second radio label - should deselect first
  await userEvent.click(label2);
  await expect(radio1).not.toBeChecked();
  await expect(radio2).toBeChecked();
};

export const RadioGroupRowComponent = (args: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const optionsWithChecked = args.options.map(opt => ({
    ...opt,
    checked: opt.value === selectedValue,
  }));

  return (
    <RadioGroup
      {...args}
      options={optionsWithChecked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSelectedValue(event.target.value)}
    />
  );
};

RadioGroupRowComponent.storyName = 'Row Layout';
RadioGroupRowComponent.args = {
  type: 'row',
  group: 'test-row',
  options: radioButtons,
  error: '',
  disabled: false,
};
RadioGroupRowComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Find radio labels
  const label1 = canvas.getByText('Option 1');
  const label2 = canvas.getByText('Option 2');

  // Find radio inputs
  const radios = canvasElement.querySelectorAll('input[type="radio"]');
  const radio1 = radios[0] as HTMLInputElement;
  const radio2 = radios[1] as HTMLInputElement;

  // Select second option
  await userEvent.click(label2);
  await expect(radio2).toBeChecked();
  await expect(radio1).not.toBeChecked();
};

export const RadioGroupWithErrorComponent = (args: RadioGroupProps) => {
  return <RadioGroup {...args} />;
};

RadioGroupWithErrorComponent.storyName = 'With Error';
RadioGroupWithErrorComponent.args = {
  type: 'column',
  group: 'test-error',
  options: radioButtons,
  error: 'Please select an option',
  disabled: false,
};
RadioGroupWithErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify error message is displayed
  const errorMessage = canvas.getByText('Please select an option');
  await expect(errorMessage).toBeInTheDocument();
};

export const RadioGroupDisabledComponent = (args: RadioGroupProps) => {
  return <RadioGroup {...args} />;
};

RadioGroupDisabledComponent.storyName = 'Disabled';
RadioGroupDisabledComponent.args = {
  type: 'column',
  group: 'test-disabled',
  options: radioButtons,
  error: '',
  disabled: true,
};
RadioGroupDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // Find radio inputs
  const radios = canvasElement.querySelectorAll('input[type="radio"]');
  const radio1 = radios[0] as HTMLInputElement;
  const radio2 = radios[1] as HTMLInputElement;

  // Verify radio buttons are disabled
  await expect(radio1).toBeDisabled();
  await expect(radio2).toBeDisabled();
};
