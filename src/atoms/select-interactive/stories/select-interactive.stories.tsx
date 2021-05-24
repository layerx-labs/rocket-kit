import React, { useState } from 'react';
import SelectInteractive from '..';

export default {
  title: 'Design System/Atoms/Select',
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

interface SelectInteractiveProps {
  multi: boolean;
  search: boolean;
  placeholder: string;
}

export const SelectInteractiveSimpleComponent = (
  args: SelectInteractiveProps
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

export const SelectInteractiveIconsComponent = (
  args: SelectInteractiveProps
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
  args: SelectInteractiveProps
) => {
  const options = [
    {
      value: 'chocolate',
      label: 'Chocolate',
      customImage: <img src="./images/default-avatar.svg" alt="" />,
    },
    {
      value: 'strawberry',
      label: 'Strawberry',
      customImage: <img src="./images/default-avatar.svg" alt="" />,
    },
    {
      value: 'vanilla',
      label: 'Vanilla',
      customImage: <img src="./images/default-avatar.svg" alt="" />,
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
