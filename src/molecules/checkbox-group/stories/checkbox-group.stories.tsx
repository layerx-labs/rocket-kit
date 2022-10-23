import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { jest, expect } from '@storybook/jest';
import React from 'react';
import CheckboxGroup, { CheckboxGroupProps } from '..';

export default {
  title: 'Components/Molecules/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['row', 'column'],
      },
    },
    onChange: { action: () => {} },
  },
};

const checkboxButtons = [
  {
    label: 'Option 1',
    value: 'option_1',
    disabled: false,
  },
  { label: 'Option 2', value: 'option_2', disabled: false },
];

export const CheckboxGroupComponent: ComponentStory<typeof CheckboxGroup> = (
  args: CheckboxGroupProps
) => {
  return <CheckboxGroup {...args} />;
};

CheckboxGroupComponent.storyName = 'CheckboxGroup';

CheckboxGroupComponent.args = {
  type: 'column',
  options: checkboxButtons,
  error: '',
  disabled: false,
  dataTestId: 'checkbox-group',
};
CheckboxGroupComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const option1 = canvas.getByTestId('checkbox-group-option-1');
  const option2 = canvas.getByTestId('checkbox-group-option-2');

  expect(option1).not.toBeChecked();
  expect(canvas.getByTestId('checkbox-group-option-1-label')).toHaveTextContent(
    'Option 1'
  );

  expect(option1).not.toBeChecked();
  expect(canvas.getByTestId('checkbox-group-option-2-label')).toHaveTextContent(
    'Option 2'
  );

  userEvent.click(option1);
  userEvent.click(option2);

  expect(option1).toBeChecked();
  expect(option2).toBeChecked();

  userEvent.click(option1);
  userEvent.click(option2);
};
