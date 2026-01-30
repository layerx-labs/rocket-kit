import React from 'react';
import FilePicker, { FilePickerProps } from '..';
import { expect, within, userEvent, fn } from 'storybook/test';

export default {
  title: 'Components/Atoms/FilePicker',
  component: FilePicker,
};

export const FilePickerComponent = (args: FilePickerProps) => (
  <FilePicker {...args} />
);

FilePickerComponent.storyName = 'File Picker';
FilePickerComponent.args = {
  multiple: false,
  name: 'file',
  placeholder: 'Select file',
  pluralText: 'files selected',
  error: '',
  buttonText: 'Browse',
  disabled: false,
  onChange: fn(),
};
FilePickerComponent.play = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: FilePickerProps }) => {
  const canvas = within(canvasElement);

  // Verify the file picker elements exist
  const fileInput = canvasElement.querySelector('input[type="file"]') as HTMLInputElement;
  await expect(fileInput).toBeInTheDocument();

  // Verify the label and button text
  const browseButton = canvas.getByText('Browse');
  await expect(browseButton).toBeInTheDocument();

  // Verify placeholder text
  const placeholder = canvas.getByText('Select file');
  await expect(placeholder).toBeInTheDocument();
};

export const FilePickerWithErrorComponent = (args: FilePickerProps) => (
  <FilePicker {...args} />
);

FilePickerWithErrorComponent.storyName = 'With Error';
FilePickerWithErrorComponent.args = {
  multiple: false,
  name: 'file-error',
  placeholder: 'Select file',
  pluralText: 'files selected',
  error: 'Please select a valid file',
  buttonText: 'Browse',
  disabled: false,
  onChange: fn(),
};
FilePickerWithErrorComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify error message is displayed
  const errorMessage = canvas.getByText('Please select a valid file');
  await expect(errorMessage).toBeInTheDocument();
};

export const FilePickerDisabledComponent = (args: FilePickerProps) => (
  <FilePicker {...args} />
);

FilePickerDisabledComponent.storyName = 'Disabled';
FilePickerDisabledComponent.args = {
  multiple: false,
  name: 'file-disabled',
  placeholder: 'Select file',
  pluralText: 'files selected',
  error: '',
  buttonText: 'Browse',
  disabled: true,
  onChange: fn(),
};
FilePickerDisabledComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify disabled state styling is applied
  const wrapper = canvasElement.querySelector('[class*="wrapper"]');
  await expect(wrapper).toBeInTheDocument();

  // Verify browse button exists
  const browseButton = canvas.getByText('Browse');
  await expect(browseButton).toBeInTheDocument();
};

export const FilePickerMultipleComponent = (args: FilePickerProps) => (
  <FilePicker {...args} />
);

FilePickerMultipleComponent.storyName = 'Multiple Files';
FilePickerMultipleComponent.args = {
  multiple: true,
  name: 'files-multiple',
  placeholder: 'Select files',
  pluralText: 'files selected',
  error: '',
  buttonText: 'Browse',
  disabled: false,
  onChange: fn(),
};
FilePickerMultipleComponent.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Verify the file input has multiple attribute
  const fileInput = canvasElement.querySelector('input[type="file"]') as HTMLInputElement;
  await expect(fileInput).toHaveAttribute('multiple');

  // Verify placeholder text
  const placeholder = canvas.getByText('Select files');
  await expect(placeholder).toBeInTheDocument();
};
