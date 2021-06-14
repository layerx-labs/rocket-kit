import React from 'react';
import DataWarning, { DataWarningProps } from '..';

export default {
  title: 'Design System/Molecules/Data Warning',
  component: DataWarning,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['login', 'data'],
      },
    },
  },
};

export const DataWarningComponent = (args: DataWarningProps) => (
  <DataWarning {...args}>
    <span>Please login to read the project description.</span>
  </DataWarning>
);

DataWarningComponent.args = {
  type: 'login',
};
