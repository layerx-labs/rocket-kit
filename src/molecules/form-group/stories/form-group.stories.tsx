import React from 'react';
import FormGroup from '..';
import { TextField } from '../../../';
import { FormGroupProps } from '..';

export default {
  title: 'Design System/Molecules/Form Group',
  component: FormGroup,
  argTypes: {
    kai: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const FormGroupComponent = (args: FormGroupProps) => {
  return (
    <FormGroup {...args}>
      <TextField minimal={false} placeholder="Awesome Placeholder" />
    </FormGroup>
  );
};

FormGroupComponent.storyName = 'Form Group';
FormGroupComponent.args = {
  label: 'Awesome Label',
  kai: false,
};
