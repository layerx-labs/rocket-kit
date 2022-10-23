import React from 'react';
import FilePicker, { FilePickerProps } from '..';
import { ComponentStory } from '@storybook/react';
import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { waitFor } from '@testing-library/react';
import { expect, jest } from '@storybook/jest';

export default {
  title: 'Components/Atoms/FilePicker',
  component: FilePicker,
};

export const FilePickerComponent: ComponentStory<typeof FilePicker> = (
  args: FilePickerProps
) => <FilePicker {...args} />;

const mockedOnChange = jest.fn();
FilePickerComponent.story = {
  name: 'File Picker',
  args: {
    minimal: false,
    multiple: false,
    name: 'file',
    placeholder: 'Select file',
    pluralText: 'files selected',
    error: '',
    buttonText: 'Browse',
    disabled: false,
    dataTestId: 'filepicker',
    onChange: mockedOnChange,
  },
};

FilePickerComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const filepicker = canvas.getByTestId('filepicker');

  // make sure that onchange has not been called yet
  expect(mockedOnChange).not.toHaveBeenCalled();
  // simulate ulpoad event and wait until finish
  const file = new File(['(⌐□_□)'], 'taikai.png', { type: 'image/png' });
  userEvent.upload(filepicker, file);

  // check if the file is there
  expect(canvas.getByTestId('filepicker-label')).toHaveDisplayValue(
    'taikai.png'
  );

  // make sure that onChange was called
  await expect(mockedOnChange).toHaveBeenCalled();
};
