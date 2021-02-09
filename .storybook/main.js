module.exports = {
  stories: [
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
    '../**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
