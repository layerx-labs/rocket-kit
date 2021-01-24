import React from 'react';
import { Icon } from '../..';
import { useMouseMoveEffect } from '../../utils/hooks/use-mouse-move-effect';
import { ButtonColor, ButtonVariant } from '../button/types';
import * as Styles from './styles';

export interface ButtonLinkProps {
  url: string;
  blank?: boolean;
  variant?: ButtonVariant;
  circle?: boolean;
  color?: ButtonColor;
  value?: string;
  className?: string;
  querySelector?: string;
  ariaLabel?: string;
  action?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  dataTestId?: string;
  eventId?: string;
  icon?: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    variant = 'solid',
    color = 'primary',
    querySelector = '.button-link',
    className = 'button-link',
    url,
    blank = false,
    icon = '',
    value = '',
    action = () => {},
    dataTestId = '',
    eventId = '',
  } = props;

  useMouseMoveEffect({ querySelector });

  return (
    <Styles.ButtonLinkStyle
      variant={variant}
      color={color}
      className={`button ${className}`}
      href={url}
      target={blank ? '_blank' : ''}
      rel={blank ? 'noopener noreferrer' : ''}
      value={value}
      onClick={action}
      data-testid={dataTestId}
      data-event={eventId}
    >
      {icon && <Icon icon={icon} />}
      {value && <span>{value}</span>}
    </Styles.ButtonLinkStyle>
  );
};

export default ButtonLink;
