import type { Preview } from '@storybook/react';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      options: {
        light: {
          name: 'light',
          value: '#ffffff',
        },
        dark: {
          name: 'dark',
          value: '#0D0F19',
        },
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
  },

  tags: ['autodocs'],
};

export default preview;
