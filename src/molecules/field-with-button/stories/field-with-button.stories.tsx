import React from 'react';
import FieldWidthButton, { FieldWidthButtonProps } from '..';
import { jest, expect } from '@storybook/jest';
import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Components/Molecules/FieldWidthButton',
  component: FieldWidthButton,
  argTypes: {
    onChange: { action: () => {} },
    buttonAction: { action: 'update value' },
  },
};

export const FieldWidthButtonComponent: ComponentStory<
  typeof FieldWidthButton
> = (args: FieldWidthButtonProps) => {
  return <FieldWidthButton {...args} />;
};

FieldWidthButtonComponent.storyName = 'FieldWidthButton';

const mockedButtonAction = jest.fn();
FieldWidthButtonComponent.args = {
  label: 'Copy Link',
  value: 'https://taikai.network',
  disabled: false,
  buttonIcon: 'copy',
  buttonValue: '',
  buttonAction: mockedButtonAction,
  dataTestId: 'field-width',
};

FieldWidthButtonComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByTestId('field-width-label')).toHaveTextContent(
    'Copy Link'
  );

  expect(canvas.getByRole('textbox')).toHaveValue('https://taikai.network');

  expect(mockedButtonAction).toHaveBeenCalledTimes(0);
  userEvent.click(canvas.getByRole('button'));
  expect(mockedButtonAction).toHaveBeenCalledTimes(1);
};
