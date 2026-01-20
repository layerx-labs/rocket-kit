import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.tsx',
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },

  staticDirs: ['../static'],

  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve || {}).fallback,
        fs: false,
        stream: false,
        os: false,
      },
    };

    // Return the altered config
    return config;
  }
};

export default config;
