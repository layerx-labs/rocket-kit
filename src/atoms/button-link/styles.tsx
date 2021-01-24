import styled, { css } from 'styled-components';
import { device } from '../../ions/breakpoints';
import { liveKeyframe } from '../button/styles';
import { ButtonColor, ButtonVariant } from '../button/types';

interface ButtonStyleProps {
  variant?: ButtonVariant;
  circle?: boolean;
  color?: ButtonColor;
  value?: String;
}

export const ButtonLinkStyle = styled.a<ButtonStyleProps>`
  --button: var(--green, hsl(186, 62%, 59%));
  --txt: var(--white, hsl(0, 0%, 100%));
  --hover: hsl(186, 62%, 49%);

  border-width: ${props => (props.variant === 'outline' ? '3px' : 0)};
  border-style: solid;
  border-color: var(--button);
  border-radius: ${props => (props.variant === 'text' ? 0 : '999px')};
  background-color: ${props =>
    props.variant === 'solid' ? 'var(--button)' : 'transparent'};
  width: min-content;
  min-width: ${props => (props.value ? '80px' : '36px')};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.value ? '0 20px' : 0)};
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  transition-duration: 0.3s;
  cursor: pointer;

  @media ${device.l} {
    min-width: ${props => (props.value ? '100px' : '36px')};
  }

  &:hover {
    border-color: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    background-color: ${props =>
      props.variant === 'solid' ? 'var(--hover)' : 'transparent'};

    span {
      color: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    }

    svg {
      fill: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    }
  }

  > *:not(:last-child) {
    margin-right: 5px;
  }

  span {
    position: relative;
    font-size: 0.75rem;
    font-weight: var(--bold, 700);
    color: ${props =>
      props.variant === 'solid' ? 'var(--txt)' : 'var(--button)'};
    pointer-events: none;
    transition-duration: 0.3s;
  }

  svg {
    width: auto;
    min-width: 20px;
    height: 20px;
    fill: ${props =>
      props.variant === 'solid' ? 'var(--txt)' : 'var(--button)'};
    transition: 0.3s;
  }

  ${props =>
    props.color === 'danger' &&
    css`
      --button: var(--red, hsl(354, 83%, 64%));
      --hover: hsl(354, 83%, 54%);
    `}

  ${props =>
    props.color === 'info' &&
    css`
      --button: var(--grey, hsl(0, 0%, 85%));
      --hover: hsl(0, 0%, 75%);
    `}

  ${props =>
    props.color === 'purple' &&
    css`
      --button: var(--purple, hsl(256, 55%, 43%));
      --hover: hsl(256, 55%, 33%);
    `}

  ${props =>
    props.color === 'black' &&
    css`
      --button: var(--default, hsl(0, 0%, 16%));
      --hover: hsl(0, 0%, 6%);
    `}

  ${props =>
    props.color === 'magic' &&
    css`
      position: relative;
      background-image: linear-gradient(to bottom right, #ef5867, #5031a8);
      height: 60px;
      padding: 0 40px;
      overflow: hidden;

      span {
        font-size: 1rem;
        font-weight: var(--black, 700);
      }

      &:before {
        --size: 0;

        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #5031a8, transparent);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: width 0.2s ease, height 0.2s ease;
        transition: width 0.2s ease, height 0.2s ease;
      }

      &:hover:before {
        --size: 200px;
      }
    `}

    ${props =>
      props.color === 'live' &&
      css`
        animation: ${liveKeyframe} 1s infinite;
      `}

    ${props =>
      props.color === 'white' &&
      css`
        --txt: var(--purple, hsl(256, 55%, 43%));
        --button: var(--white, hsl(0, 0%, 100%));
        --hover: var(--yellow, hsl(43, 94%, 62%));

        &:hover {
          --txt: var(--white, hsl(0, 0%, 100%));
        }
      `}
`;
