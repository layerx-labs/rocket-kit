import React, { CSSProperties } from 'react';
import { Icon, Spinner } from '../..';
import * as Styles from './styles';
import { ButtonColor, ButtonVariant } from './types';

export interface ButtonProps {
  variant?: ButtonVariant;
  rounded?: boolean;
  color?: ButtonColor;
  txtColor?: ButtonColor;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  style?: CSSProperties;
  action?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value?: string;
  iconPosition?: 'left' | 'right';
  icon?: string;
  loading?: boolean;
  ariaLabel?: string;
  ariaHidden?: boolean;
  dataTestId?: string;
  eventId?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'solid',
    rounded = false,
    color = 'purple500',
    txtColor,
    type,
    className = 'button',
    style,
    action = () => {},
    value = '',
    iconPosition = 'left',
    icon = '',
    loading = false,
    dataTestId = '',
    eventId = '',
    ariaLabel,
    ariaHidden = false,
    disabled = false,
  } = props;

  return (
    <Styles.ButtonWrapper
      variant={variant}
      rounded={rounded}
      color={color}
      txtColor={txtColor}
      type={type}
      className={className}
      style={style}
      onClick={action}
      value={value}
      iconPosition={iconPosition}
      data-testid={dataTestId}
      data-event={eventId}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
      {value && <span>{value}</span>}
    </Styles.ButtonWrapper>
  );
};

export default Button;
