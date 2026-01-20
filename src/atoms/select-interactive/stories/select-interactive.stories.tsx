import React, { useState } from 'react';
import SelectInteractive from '../';
import { SelectInteractiveProps, TSelectInteractiveOption } from '../types';
import { expect, within, userEvent } from 'storybook/test';

export default {
  title: 'Components/Atoms/Select',
  component: SelectInteractive,
  argTypes: {
    multi: {
      control: {
        type: 'boolean',
      },
    },
    search: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const SelectInteractiveSimpleComponent = (
  args: SelectInteractiveProps<TSelectInteractiveOption>
) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'cookies', label: 'Cookies and Cream' },
    { value: 'oreo', label: 'Oreo' },
  ];

  const [selectOptions, setSelectOptions] = useState(options[1]);

  const handleChange = (selectedOption: any) => {
    setSelectOptions(selectedOption);
  };

  return (
    <SelectInteractive
      {...args}
      value={selectOptions}
      options={options}
      onChange={handleChange}
    />
  );
};

SelectInteractiveSimpleComponent.storyName = 'Interactive Simple';
SelectInteractiveSimpleComponent.args = {
  multi: false,
  search: true,
  placeholder: 'Awesome Select Component',
};
SelectInteractiveSimpleComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the select shows initial value
  const selectedValue = canvas.getByText('Strawberry');
  await expect(selectedValue).toBeInTheDocument();

  // Click to open the dropdown
  await userEvent.click(selectedValue);

  // Wait for options to appear and select a different option
  const chocolateOption = await canvas.findByText('Chocolate');
  await expect(chocolateOption).toBeInTheDocument();

  await userEvent.click(chocolateOption);

  // Verify the new selection
  const newSelection = canvas.getByText('Chocolate');
  await expect(newSelection).toBeInTheDocument();
};

export const SelectInteractiveFormatedGroupedOptionsComponent = (
  args: SelectInteractiveProps<TSelectInteractiveOption>
) => {
  const options = [
    {
      label: 'Chocolates',
      options: [
        {
          value: 'white-chocolate',
          label: 'White Chocolate',
          isDisabled: true,
        },
        { value: 'black-chocolate', label: 'Black Chocolate' },
      ],
    },
    {
      label: 'Meat',
      options: [
        { value: 'fish', label: 'Fish' },
        { value: 'chicken', label: 'Chicken' },
      ],
    },
    {
      label: 'fruits',
      options: [
        { value: 'mango', label: 'Mambo' },
        { value: 'peach', label: 'Peach' },
        { value: 'orange', label: 'Orange' },
      ],
    },
  ];

  const [selectOptions, setSelectOptions] = useState<
    TSelectInteractiveOption | ReadonlyArray<TSelectInteractiveOption> | null
  >(options[1].options[1]);

  const handleChange: SelectInteractiveProps<TSelectInteractiveOption>['onChange'] =
    selectedOption => {
      setSelectOptions(selectedOption);
    };

  return (
    <SelectInteractive
      {...args}
      multi
      options={options}
      onChange={handleChange}
      value={selectOptions}
    />
  );
};

SelectInteractiveFormatedGroupedOptionsComponent.storyName =
  'Interactive and Grouped';
SelectInteractiveFormatedGroupedOptionsComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the initial selection
  const selectedValue = canvas.getByText('Chicken');
  await expect(selectedValue).toBeInTheDocument();

  // Click to open the dropdown
  await userEvent.click(selectedValue);

  // Verify grouped options appear
  const chocolatesGroup = await canvas.findByText('Chocolates');
  const meatGroup = canvas.getByText('Meat');
  const fruitsGroup = canvas.getByText('fruits');
  await expect(chocolatesGroup).toBeInTheDocument();
  await expect(meatGroup).toBeInTheDocument();
  await expect(fruitsGroup).toBeInTheDocument();

  // Select an additional option (multi-select)
  const fishOption = canvas.getByText('Fish');
  await userEvent.click(fishOption);
};

export const SelectInteractiveIconsComponent = (
  args: SelectInteractiveProps<TSelectInteractiveOption>
) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate', icon: 'image' },
    { value: 'strawberry', label: 'Strawberry', icon: 'folder' },
    { value: 'vanilla', label: 'Vanilla', icon: 'settings' },
  ];

  const [selectOptions, setSelectOptions] = useState(options[1]);

  const handleChange = (selectedOption: any) => {
    setSelectOptions(selectedOption);
  };

  return (
    <SelectInteractive
      {...args}
      value={selectOptions}
      options={options}
      onChange={handleChange}
    />
  );
};

SelectInteractiveIconsComponent.storyName = 'Interactive Icons';
SelectInteractiveIconsComponent.args = {
  multi: false,
  search: true,
  placeholder: 'Awesome Select Component',
};
SelectInteractiveIconsComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify initial selection with icon
  const selectedValue = canvas.getByText('Strawberry');
  await expect(selectedValue).toBeInTheDocument();

  // Open dropdown
  await userEvent.click(selectedValue);

  // Select option with icon
  const vanillaOption = await canvas.findByText('Vanilla');
  await userEvent.click(vanillaOption);

  // Verify new selection
  const newSelection = canvas.getByText('Vanilla');
  await expect(newSelection).toBeInTheDocument();
};

export const SelectInteractiveCustomComponent = (
  args: SelectInteractiveProps<TSelectInteractiveOption>
) => {
  const options = [
    {
      value: 'chocolate',
      label: 'Chocolate',
      customImage: '/images/default-avatar.svg',
    },
    {
      value: 'strawberry',
      label: 'Strawberry',
      customImage: '/images/default-avatar.svg',
    },
    {
      value: 'vanilla',
      label: 'Vanilla',
      customImage: '/images/default-avatar.svg',
    },
  ];

  const [selectOptions, setSelectOptions] = useState(options[1]);

  const handleChange = (selectedOption: any) => {
    setSelectOptions(selectedOption);
  };

  return (
    <SelectInteractive
      {...args}
      value={selectOptions}
      options={options}
      onChange={handleChange}
    />
  );
};

SelectInteractiveCustomComponent.storyName = 'Interactive Custom';
SelectInteractiveCustomComponent.args = {
  multi: false,
  search: true,
  placeholder: 'Awesome Select Component',
};
SelectInteractiveCustomComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify initial selection with custom image
  const selectedValue = canvas.getByText('Strawberry');
  await expect(selectedValue).toBeInTheDocument();

  // Open dropdown and select different option
  await userEvent.click(selectedValue);

  const chocolateOption = await canvas.findByText('Chocolate');
  await userEvent.click(chocolateOption);

  // Verify new selection
  const newSelection = canvas.getByText('Chocolate');
  await expect(newSelection).toBeInTheDocument();
};

export const SelectInteractiveSearchComponent = (
  args: SelectInteractiveProps<TSelectInteractiveOption>
) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'cookies', label: 'Cookies and Cream' },
    { value: 'oreo', label: 'Oreo' },
  ];

  const [selectOptions, setSelectOptions] = useState<TSelectInteractiveOption | null>(null);

  return (
    <SelectInteractive
      {...args}
      value={selectOptions}
      options={options}
      onChange={(option) => setSelectOptions(option as TSelectInteractiveOption)}
    />
  );
};

SelectInteractiveSearchComponent.storyName = 'With Search';
SelectInteractiveSearchComponent.args = {
  multi: false,
  search: true,
  placeholder: 'Search and select...',
};
SelectInteractiveSearchComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Click to open the select and show search
  const placeholder = canvas.getByText('Search and select...');
  await userEvent.click(placeholder);

  // Type to search
  const input = canvasElement.querySelector('input');
  if (input) {
    await userEvent.type(input, 'cho');

    // Verify filtered results
    const chocolateOption = await canvas.findByText('Chocolate');
    await expect(chocolateOption).toBeInTheDocument();

    // Select the filtered option
    await userEvent.click(chocolateOption);
  }
};
