import styled, { css } from 'styled-components';
import { NoteColor } from './types';
import { rem, lighten, darken } from 'polished';
import { device } from '../../ions/breakpoints';

interface NoteCardProps {
  color?: NoteColor;
  buttonValue?: string;
}

export const Wrapper = styled.div<NoteCardProps>`
  --default: hsl(0, 0%, 48%);
  --light: ${lighten(0.4, 'hsl(0, 0%, 48%)')};
  --dark: ${darken(0.1, 'hsl(0, 0%, 48%)')};

  ${props =>
    props.color === 'info' &&
    css`
      --default: hsl(0, 0%, 48%);
      --light: ${lighten(0.4, 'hsl(0, 0%, 48%)')};
      --dark: ${darken(0.1, 'hsl(0, 0%, 48%)')};
    `}

  ${props =>
    props.color === 'primary' &&
    css`
      --default: hsl(186, 62%, 59%);
      --light: ${lighten(0.3, 'hsl(186, 62%, 59%)')};
      --dark: ${darken(0.15, 'hsl(186, 62%, 59%)')};
    `}

  ${props =>
    props.color === 'danger' &&
    css`
      --default: hsl(354, 83%, 64%);
      --light: ${lighten(0.25, 'hsl(354, 83%, 64%)')};
      --dark: ${darken(0.19, 'hsl(354, 83%, 64%)')};
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
