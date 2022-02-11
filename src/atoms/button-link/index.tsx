import React, { CSSProperties } from 'react';
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
  iconPosition?: 'left' | 'right';
  style?: CSSProperties;
  rel?: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    variant = 'solid',
    color = 'green',
    querySelector = '.button-link',
    className = 'button-link',
    url,
    blank = false,
    icon = '',
    iconPosition = 'left',
    value = '',
    action = () => {},
    dataTestId = '',
    eventId = '',
    style,
    rel = undefined,
  } = props;

  const getRelationshipAttributes = () => {
    if (rel && rel !== '') return rel;
    return blank ? 'noopener noreferrer' : '';
  };

  useMouseMoveEffect({ querySelector });

  return (
    <Styles.ButtonLinkStyle
      variant={variant}
      color={color}
      className={`button ${className}`}
      href={url}
      target={blank ? '_blank' : ''}
      value={value}
      onClick={action}
      data-testid={dataTestId}
      data-event={eventId}
      style={style}
      iconPosition={iconPosition}
      rel={getRelationshipAttributes()}
    >
      {icon && <Icon icon={icon} />}
      {value && <span>{value}</span>}
    </Styles.ButtonLinkStyle>
  );
};

export default ButtonLink;
