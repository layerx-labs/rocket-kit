import { createGlobalStyle } from 'styled-components/macro';
import { fontWeight, colors } from './ions/variables';

const {normal} = colors;
const { regular } = fontWeight;

const GlobalStyle = createGlobalStyle`
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
    font-weight: ${regular};
    color: ${normal};
    font-feature-settings: 'ss04' on;
  }
`;

export default GlobalStyle;
