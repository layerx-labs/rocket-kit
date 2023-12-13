module.exports = {
  plugins: ['testing-library', 'jest-dom', 'jsx-a11y'],
  extends: [
    'react-app',
    'prettier',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
  ],
};
