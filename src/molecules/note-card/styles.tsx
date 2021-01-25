import styled, { css } from 'styled-components';
import { NoteColor } from './types';
import { rem, lighten, darken } from 'polished';
import { device } from '../../ions/breakpoints';
import { colors } from '../../ions/variables';

interface NoteCardProps {
  color?: NoteColor;
  buttonValue?: string;
}

const { primary, info, danger } = colors;

export const Wrapper = styled.div<NoteCardProps>`
  --default: ${info};
  --light: ${lighten(0.4, info)};
  --dark: ${darken(0.1, info)};

  ${props =>
    props.color === 'info' &&
    css`
      --default: ${info};
      --light: ${lighten(0.4, info)};
      --dark: ${darken(0.1, info)};
    `}

  ${props =>
    props.color === 'primary' &&
    css`
      --default: ${primary};
      --light: ${lighten(0.3, primary)};
      --dark: ${darken(0.15, primary)};
    `}

  ${props =>
    props.color === 'danger' &&
    css`
      --default: ${danger};
      --light: ${lighten(0.25, danger)};
      --dark: ${darken(0.19, danger)};
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
