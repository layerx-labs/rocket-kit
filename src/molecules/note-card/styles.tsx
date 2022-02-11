import styled, { css } from 'styled-components/macro';
import { NoteColor } from './types';
import { rem } from 'polished';
import { device } from '../../ions/breakpoints';
import { colors } from '../../ions/variables';

interface NoteCardProps {
  color?: NoteColor;
  buttonValue?: string;
}

const {
  green,
  lightGreen,
  darkGreen,
  grey,
  lightGrey,
  darkGrey,
  red,
  lightRed,
  darkRed,
} = colors;

export const Wrapper = styled.div<NoteCardProps>`
  --default: ${grey};
  --light: ${lightGrey};
  --dark: ${darkGrey};

  ${props =>
    props.color === 'grey' &&
    css`
      --default: ${grey};
      --light: ${lightGrey};
      --dark: ${darkGrey};
    `}

  ${props =>
    props.color === 'green' &&
    css`
      --default: ${green};
      --light: ${lightGreen};
      --dark: ${darkGreen};
    `}

  ${props =>
    props.color === 'red' &&
    css`
      --default: ${red};
      --light: ${lightRed};
      --dark: ${darkRed};
    `}

  border-width: 2px;
  border-style: solid;
  border-color: var(--default);
  border-radius: 6px;
  background-color: var(--light);
  padding: ${rem('15px')};

  div {
    &:first-child {
      flex: 1;
    }

    p {
      margin: 0;
    }
  }

  ${props =>
    props.buttonValue &&
    css`
      button {
        margin: ${rem('30px')} 0 0 0;
        border: 0;
        border-radius: ${rem('6px')};
        background-color: var(--default);
        height: ${rem('36px')};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${rem('20px')};
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        color: hsl(0, 0%, 100%);
        white-space: nowrap;
        transition-duration: 0.3s;
        cursor: pointer;

        &:hover {
          background-color: var(--dark);
        }
      }

      @media ${device.s} {
        display: flex;
        align-items: center;

        button {
          margin: 0 0 0 ${rem('30px')};
        }
      }
    `}
`;
