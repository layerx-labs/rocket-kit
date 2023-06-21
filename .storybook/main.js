module.exports = {
  stories: [
    '../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../src/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-styling',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
