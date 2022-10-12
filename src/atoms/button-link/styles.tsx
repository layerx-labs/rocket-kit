import styled from 'styled-components/macro';
import { rem } from 'polished';
import { ButtonColor, ButtonVariant } from '../button/types';
import { colors, typography, button, misc } from '../../ions/variables';
import { useColor } from '../../utils/hooks/use-color';

interface ButtonStyleProps {
  variant?: ButtonVariant;
  rounded?: boolean;
  color?: ButtonColor;
  txtColor?: ButtonColor;
  value?: String;
  iconPosition?: 'left' | 'right';
}

export const ButtonLinkStyle = styled.a<ButtonStyleProps>`
  --bg: ${props => useColor(props.color ?? 'black').color};
  --txt: ${props => useColor(props.txtColor ?? 'black').color};
  --hover: ${props =>
    props.color === 'white'
      ? colors.grey100
      : props.color === 'black'
      ? colors.grey900
      : useColor(props.color ?? 'black').hover};

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
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  transition-duration: ${misc.transitionDuration};
  cursor: pointer;

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
    margin-left: ${props =>
      props.iconPosition === 'right' ? button.iconSpacing : 0};
    margin-right: ${props =>
      props.iconPosition === 'left' ? button.iconSpacing : 0};
  }

  span {
    position: relative;
    font-size: ${rem(typography.defaultSize)};
    font-weight: ${typography.medium};
    letter-spacing: ${typography.letterSpacing};
    line-height: ${rem(typography.defaultSize)};
    color: ${props => (props.variant === 'solid' ? 'var(--txt)' : 'var(--bg)')};
    pointer-events: none;
    transition-duration: ${misc.transitionDuration};
    order: ${props => (props.iconPosition === 'left' ? 2 : 1)};
  }

  svg {
    order: ${props => (props.iconPosition === 'left' ? 1 : 2)};
    width: ${button.iconSize};
    height: ${button.iconSize};
    fill: ${props => (props.variant === 'solid' ? 'var(--txt)' : 'var(--bg)')};
    transition: ${misc.transitionDuration};
  }
`;
