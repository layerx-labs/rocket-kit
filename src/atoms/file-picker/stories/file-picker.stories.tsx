import React from 'react';
import FilePicker, { FilePickerProps } from '..';

export default {
  title: 'Design System/Atoms/FilePicker',
  component: FilePicker,
};

export const FilePickerComponent = (args: FilePickerProps) => (
  <FilePicker {...args} />
);

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
  },
};
