import { createGlobalStyle } from 'styled-components/macro';
import { fontWeigth } from './ions/variables';

const { regular } = fontWeigth;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', Verdana, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: ${regular};
    color: var(--default, hsl(0, 0%, 16%))
  }
`;

export default GlobalStyle;
