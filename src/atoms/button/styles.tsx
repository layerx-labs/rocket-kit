import styled from 'styled-components';
import { rem } from 'polished';
import { ButtonColor, ButtonVariant } from './types';
import { colors, typography, button, misc } from '../../ions/variables';
import { useColor } from '../../utils/hooks/use-color';

interface ButtonProps {
  variant?: ButtonVariant;
  rounded?: boolean;
  color?: ButtonColor;
  txtColor?: ButtonColor;
  value?: String;
  iconPosition?: 'left' | 'right';
}

export const ButtonWrapper = styled.button<ButtonProps>`
  --bg: ${props => useColor(props.color ?? 'black').color};
  --txt: ${props =>
    props.variant === 'outline' && !props.txtColor
      ? useColor(props.color ?? 'black').color
      : useColor(props.txtColor ?? 'white').color};
  --hover: ${props =>
    props.color === 'white'
      ? colors.grey100
      : props.color === 'black'
        ? colors.grey900
        : useColor(props.color ?? 'black').hover};

  margin: 0;
  border-width: ${props =>
    props.variant === 'outline' ? button.borderWidth : 0};
  border-style: solid;
  border-color: var(--bg);
  border-radius: ${props =>
    props.variant === 'text'
      ? 0
      : props.rounded
        ? '999px'
        : button.borderRadius};
  background-color: ${props =>
    props.variant === 'solid' ? 'var(--bg)' : 'transparent'};
  width: min-content;
  min-width: ${props => (props.value ? rem('80px') : rem('42px'))};
  height: ${button.height};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.value ? `0 ${button.padding}` : 0)};
  white-space: nowrap;
  text-decoration: none;
  transition-duration: ${misc.transitionDuration};
  cursor: pointer;
  outline: none;

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

  &:disabled {
    cursor: inherit;
    opacity: 0.5;

    &:hover {
      background-color: ${props =>
        props.variant === 'solid' ? 'var(--bg)' : 'transparent'};
      pointer-events: none;
    }
  }

  > *:not(:last-child) {
    margin-left: ${props =>
      props.iconPosition === 'right' ? button.iconSpacing : 0};
    margin-right: ${props =>
      props.iconPosition === 'left' ? button.iconSpacing : 0};
  }

  .spinner {
    order: ${props => (props.iconPosition === 'left' ? 1 : 2)};
    border-top-color: ${props =>
      props.variant === 'solid' ? '' : 'var(--button)'};
  }

  span {
    position: relative;
    font-size: ${rem(typography.defaultSize)};
    font-weight: ${typography.medium};
    line-height: ${rem(typography.defaultSize)};
    color: ${props =>
      props.variant === 'solid' || props.variant === 'outline'
        ? 'var(--txt)'
        : 'var(--bg)'};
    pointer-events: none;
    transition-duration: ${misc.transitionDuration};
    order: ${props => (props.iconPosition === 'left' ? 2 : 1)};
  }

  svg {
    order: ${props => (props.iconPosition === 'left' ? 1 : 2)};
    width: ${button.iconSize};
    height: ${button.iconSize};
    fill: ${props =>
      props.variant === 'solid' || props.variant === 'outline'
        ? 'var(--txt)'
        : 'var(--bg)'};
    transition: ${misc.transitionDuration};
  }
`;
