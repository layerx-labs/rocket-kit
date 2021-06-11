import styled, { css } from 'styled-components';

interface AlertNotificationProps {
  variant?: 'success' | 'warning' | 'danger';
}

export const Wrapper = styled.div<AlertNotificationProps>`
  position: fixed;
  top: 15px;
  right: 0;
  border: 1px solid hsl(186, 62%, 49%);
  border-radius: 6px;
  background-color: var(--green, hsl(186, 62%, 59%));
  width: 300px;
  max-height: min-content;
  display: flex;
  padding: 15px;
  color: var(--white, hsl(0, 0%, 100%));
  -moz-box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
  -webkit-box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
  box-shadow: 0 0 25px 0 rgba(40, 40, 40, 0.4);
  z-index: 999;
  opacity: 0;

  button {
    background-color: transparent;

    svg {
      fill: hsl(186, 62%, 39%);
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
      right: 15px;
      opacity: 1;
    }
  }

  ${props =>
    props.variant === 'warning' &&
    css`
      border: 1px solid hsl(36, 100%, 47%);
      background-color: var(--orange, hsl(36, 100%, 57%));

      button {
        svg {
          fill: hsl(36, 100%, 37%);
        }
      }
    `}

  ${props =>
    props.variant === 'danger' &&
    css`
      border: 1px solid hsl(354, 83%, 54%);
      background-color: var(--red, hsl(354, 83%, 64%));

      button {
        svg {
          fill: hsl(354, 83%, 44%);
        }
      }
    `}

  span {
    flex: 1;
    margin-right: 5px;
    font-size: 0.85rem;
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    margin: 0 !important;
    width: 20px;
    height: 20px;
  }
`;
