import React, { useState } from 'react';
import SelectInteractive from '../';
import { SelectInteractiveProps, TSelectInteractiveOption } from '../types';

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

  const handleChange: SelectInteractiveProps<
    TSelectInteractiveOption
  >['onChange'] = selectedOption => {
    console.log(selectedOption);
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

SelectInteractiveSimpleComponent.args = {
  multi: false,
  search: true,
  placeholder: 'Awesome Select Component',
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
