import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { Icon, Spinner } from '../..';
import styles from './styles.module.css';
import { ButtonColor, ButtonVariant } from './types';
import { useColor } from '../../utils/hooks/use-color';
import { colors } from '../../ions/variables';

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

  const bgColor = useColor(color ?? 'black');
  const textColor = useColor(
    variant === 'outline' && !txtColor
      ? (color ?? 'black')
      : (txtColor ?? 'white')
  );
  const hoverColor =
    color === 'white'
      ? colors.grey100
      : color === 'black'
        ? colors.grey900
        : bgColor.hover;

  const cssVars = {
    '--bg': bgColor.color,
    '--txt': textColor.color,
    '--hover': hoverColor,
    '--buttonMinWidth': value ? '5rem' : '2.625rem',
    '--spinnerOrder': iconPosition === 'left' ? 1 : 2,
    '--textOrder': iconPosition === 'left' ? 2 : 1,
    '--iconOrder': iconPosition === 'left' ? 1 : 2,
    ...style,
  } as CSSProperties & Record<string, string | number>;

  const variantClass =
    variant === 'solid'
      ? styles.variantSolid
      : variant === 'outline'
        ? styles.variantOutline
        : styles.variantText;

  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variantClass,
        variant !== 'text' && (rounded ? styles.rounded : styles.notRounded),
        !value && styles.iconOnly,
        iconPosition === 'left' ? styles.iconLeft : styles.iconRight,
        className
      )}
      style={cssVars}
      onClick={action}
      data-testid={dataTestId}
      data-event={eventId}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
      {value && <span>{value}</span>}
    </button>
  );
};

export default Button;
