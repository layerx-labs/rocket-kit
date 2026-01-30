import React from 'react';
import FormGroup from '..';
import { TextField } from '../../../';
import { FormGroupProps } from '..';

export default {
  title: 'Components/Molecules/Form Group',
  component: FormGroup,
  argTypes: {
    error: {
      control: 'boolean',
    },
    currency: {
      control: 'select',
      options: ['', 'lx', 'vote', 'tkai', 'vkai'],
    },
  },
};

export const FormGroupComponent = (args: FormGroupProps) => {
  return (
    <FormGroup {...args}>
      <TextField placeholder="Awesome Placeholder" />
    </FormGroup>
  );
};

FormGroupComponent.storyName = 'Form Group';
FormGroupComponent.args = {
  label: 'Awesome Label',
  currency: 'lx',
  error: false,
};
