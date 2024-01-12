import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import '../src/styles/global.css';

const preview = {
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#0D0F19',
      },
    ],
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      /* Uncomment for theme switching support */
      // themes: {
      //   light: lightTheme,
      //   dark: darkTheme,
      // }
      // defaultTheme: 'light',
      // Provider: ThemeProvider,
    }),
  ],
};

export default preview;
