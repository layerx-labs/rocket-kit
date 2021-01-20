import React, { useEffect } from 'react';
import { Icon, Spinner } from '../..';
import * as Styles from './styles';
import { ButtonColor, ButtonVariant } from './types';

interface ButtonProps {
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
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'solid',
    circle = false,
    color = 'primary',
    value = '',
    className = 'button',
    querySelector = '.button',
    ariaLabel = '',
    action = () => {},
    disabled = false,
    loading = false,
    dataTestId = '',
    eventId = '',
    icon = '',
  } = props;

  useEffect(() => {
    if (!document) return;
    const element: HTMLElement | null = document.querySelector(querySelector);
    if (!element) return;
    element.addEventListener('mousemove', event => {
      const x = event.pageX - event.offsetX;
      const y = event.pageY - event.offsetY;
      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
    });
  }, [querySelector]);

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
    >
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
      {value && <span>{value}</span>}
    </Styles.ButtonWrapper>
  );
};

export default Button;
