import React, { CSSProperties } from 'react';
import { Icon, Spinner } from '../..';
import * as Styles from './styles';
import { ButtonColor, ButtonVariant } from './types';

export interface ButtonProps {
  variant?: ButtonVariant;
  circle?: boolean;
  color?: ButtonColor;
  value?: string;
  className?: string;
  querySelector?: string;
  ariaLabel?: string;
  action?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  dataTestId?: string;
  eventId?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  style?: CSSProperties;
  type?: 'submit' | 'reset' | 'button';
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'solid',
    circle = false,
    color = 'green',
    value = '',
    className = 'button',
    ariaLabel,
    action = () => {},
    disabled = false,
    loading = false,
    dataTestId,
    eventId,
    icon = '',
    iconPosition = 'left',
    style,
    type,
  } = props;

  return (
    <Styles.ButtonWrapper
      variant={variant}
      color={color}
      circle={circle}
      className={className}
      value={value}
      aria-label={ariaLabel}
      onClick={action}
      disabled={disabled || loading}
      data-testid={dataTestId}
      data-event={eventId}
      style={style}
      type={type}
      iconPosition={iconPosition}
    >
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
      {value && <span>{value}</span>}
    </Styles.ButtonWrapper>
  );
};

export default Button;
