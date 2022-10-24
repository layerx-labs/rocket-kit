import React from 'react';
import FormGroup from '..';
import { TextField } from '../../../';
import { FormGroupProps } from '..';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Molecules/Form Group',
  component: FormGroup,
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
    },
    kai: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const FormGroupComponent: ComponentStory<typeof FormGroup> = (
  args: FormGroupProps
) => {
  return (
    <FormGroup {...args}>
      <TextField
        dataTestId="textfield"
        minimal={false}
        placeholder="Awesome Placeholder"
      />
    </FormGroup>
  );
};

FormGroupComponent.storyName = 'Form Group';
FormGroupComponent.args = {
  label: 'Awesome Label',
  kai: false,
  error: false,
  dataTestId: 'form',
};
FormGroupComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByTestId('form-label')).toHaveTextContent('Awesome Label');

  // make sure children are visible and editable
  expect(canvas.getByTestId('textfield')).toBeVisible();
  userEvent.type(canvas.getByTestId('textfield'), 'hello');
  expect(canvas.getByTestId('textfield')).toHaveValue('hello');

  // reset textfield to default
  userEvent.clear(canvas.getByTestId('textfield'));
};
