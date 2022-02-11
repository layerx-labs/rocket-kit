import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface AlertNotificationProps {
  variant?: 'success' | 'orange' | 'red';
}

const { light, green, darkGreen, red, darkRed, orange, darkOrange } = colors;

export const Wrapper = styled.div<AlertNotificationProps>`
  --shadow: 0 0 ${rem('25px')} 0 rgba(40, 40, 40, 0.2);

  position: fixed;
  top: ${rem('15px')};
  right: 0;
  border: 2px solid ${darkGreen};
  border-radius: 6px;
  background-color: ${green};
  width: ${rem('300px')};
  max-height: min-content;
  display: flex;
  padding: ${rem('15px')};
  color: ${light};
  -moz-box-shadow: var(--shadow);
  -webkit-box-shadow: var(--shadow);
  box-shadow: var(--shadow);
  z-index: 999;
  opacity: 0;

  button {
    background-color: transparent;

    svg {
      fill: ${darkGreen};
    }
  }

  &.open {
    animation-name: slide-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes slide-in {
    0% {
      right: 0;
      opacity: 0;
    }
    100% {
      right: ${rem('15px')};
      opacity: 1;
    }
  }

  ${props =>
    props.variant === 'orange' &&
    css`
      border: 2px solid ${darkOrange};
      background-color: ${orange};

      button {
        svg {
          fill: ${darkOrange};
        }
      }
    `}

  ${props =>
    props.variant === 'red' &&
    css`
      border: 2px solid ${darkRed};
      background-color: ${red};

      button {
        svg {
          fill: ${darkRed};
        }
      }
    `}

  span {
    flex: 1;
    margin-right: ${rem('5px')};
    font-size: 0.85rem;
  }

  button {
    position: absolute;
    top: ${rem('4px')};
    right: 0;
    margin: 0 !important;
    width: ${rem('20px')};
    height: ${rem('20px')};
  }
`;
