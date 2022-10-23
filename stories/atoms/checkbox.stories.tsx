import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import React from 'react';
import { Checkbox } from '../../src';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
};

export const CheckboxSimpleComponent = args => <Checkbox {...args} />;

CheckboxSimpleComponent.storyName = 'Simple';
CheckboxSimpleComponent.args = {
  label: 'Option 1',
  value: 'option_1',
  className: 'checkbox',
  checked: false,
  disabled: false,
  error: false,
  onChange: () => {},
  dataTestId: 'checkbox',
};
CheckboxSimpleComponent.play = async ({ canvasElement }) => {
  // Make sure that it is unckecked before any interaction
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('checkbox')).not.toBeChecked();

  // Make sure that it changes color when hovered
  const nonHoverBorderColor = getComputedStyle(
    canvas.getByTestId('checkbox-mark')
  ).borderColor;
  userEvent.hover(canvas.getByRole('checkbox'));
  const hoverBorderColor = getComputedStyle(
    canvas.getByTestId('checkbox')
  ).borderColor;
  await expect(nonHoverBorderColor).not.toEqual(hoverBorderColor);

  // Make sure that it is checked when clicked
  userEvent.click(canvas.getByRole('checkbox'));
  await expect(canvas.getByRole('checkbox')).toBeChecked();
};

export const CheckboxNodeComponent = args => (
  <Checkbox
    label={[
      'I agree with ',
      <a href="#0">Terms of Service</a>,
      ' and ',
      <a href="#0">Privacy Policy</a>,
      ' of TAIKAI',
    ]}
    {...args}
  />
);

CheckboxNodeComponent.storyName = 'With links';
CheckboxNodeComponent.args = {
  value: 'option_1',
  className: 'checkbox',
  checked: false,
  disabled: false,
  error: false,
  onChange: () => {},
};
