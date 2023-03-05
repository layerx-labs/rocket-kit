import styled, { css } from 'styled-components/macro';
import { NoteColor } from './types';
import { rem } from 'polished';
import { device } from '../../ions/breakpoints';
import { colors, field, misc, typography } from '../../ions/variables';

interface NoteCardProps {
  color?: NoteColor;
  buttonValue?: string;
}

export const Wrapper = styled.div<NoteCardProps>`
  --borderColor: ${field.borderColor};
  --backgroundColor: ${colors.purple50};
  --dark: ${colors.purple400};

  ${props =>
    props.color === 'grey' &&
    css`
      --borderColor: ${field.borderColor};
      --backgroundColor: ${colors.purple50};
      --dark: ${colors.purple400};
    `}

  ${props =>
    props.color === 'green' &&
    css`
      --borderColor: ${field.successBorderColor};
      --backgroundColor: ${field.successBackgroundColor};
      --dark: ${colors.green900};
    `}

  ${props =>
    props.color === 'red' &&
    css`
      --borderColor: ${field.errorBorderColor};
      --backgroundColor: ${field.errorBackgroundColor};
      --dark: ${colors.red800};
    `}

  border-width: ${field.borderWidth};
  border-style: solid;
  border-color: var(--borderColor);
  border-radius: ${field.borderRadius};
  background-color: var(--backgroundColor);
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
        border-radius: ${field.borderRadius};
        background-color: var(--borderColor);
        height: ${rem('36px')};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${rem('20px')};
        font-size: ${typography.fontSizeSm};
        font-weight: ${typography.medium};
        color: var(--dark);
        white-space: nowrap;
        transition-duration: ${misc.transitionDuration};
        cursor: pointer;

        &:hover {
          background-color: var(--dark);
          color: ${colors.white};
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
