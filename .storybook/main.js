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
    'storybook-addon-designs',
    '@storybook/addon-interactions',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
