import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { rem } from 'polished';
import { typography, colors } from '../src/ions/variables';
import { device } from '../src/ions/breakpoints';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Space Grotesk', Verdana, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: ${typography.regular};
    color: ${colors.black};
    font-feature-settings: 'ss04' on;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h1 span,
  h2,
  h2 span {
    margin: 0;
    font-weight: ${typography.regular};
  }

  h1,
  h1 span {
    font-family: 'Laforgestencil', Verdana, Arial, Helvetica, sans-serif;
    font-size: 3.5rem;
    line-height: 1.15;
  }

  h2,
  h2 span {
    font-size: 2rem;
    line-height: 1.2;
  }

  h3,
  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    font-family: ${typography.defaultFont};
    font-size: ${rem(typography.defaultSize)};
    font-feature-settings: 'ss04' on;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.3;

    &:not(:last-child) {
      margin-bottom: ${rem('10px')};
    }
  }

  pre {
    border: 1px solid ${colors.grey500};
    border-radius: 4px;
    background-color: ${colors.grey300};
    padding: ${rem('15px')};
  }

  @media ${device.l} {
    h1,
    h1 span {
      font-size: 6rem;
      line-height: 1.1;
    }

    h2,
    h2 span {
      font-size: 2.5rem;
    }
  }
`;

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
      GlobalStyles,
    }),
  ],
};

export default preview;
