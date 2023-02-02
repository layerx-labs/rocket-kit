import React, { CSSProperties } from 'react';
import { Icon } from '../..';
import { ButtonColor, ButtonVariant } from '../button/types';
import * as Styles from './styles';

export interface ButtonLinkProps {
  variant?: ButtonVariant;
  rounded?: boolean;
  color?: ButtonColor;
  txtColor?: ButtonColor;
  className?: string;
  style?: CSSProperties;
  action?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  url: string;
  blank?: boolean;
  rel?: string;
  value?: string;
  iconPosition?: 'left' | 'right';
  icon?: string;
  dataTestId?: string;
  eventId?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    variant = 'solid',
    rounded = false,
    color = 'purple500',
    txtColor,
    className = 'button-link',
    style,
    action = () => {},
    url,
    blank = false,
    rel = undefined,
    value = '',
    iconPosition = 'left',
    icon = '',
    dataTestId = '',
    eventId = '',
    ariaLabel = '',
    ariaHidden = false,
  } = props;

  const getRelationshipAttributes = () => {
    if (rel && rel !== '') return rel;
    return blank ? 'noopener noreferrer' : '';
  };

  return (
    <Styles.ButtonLinkStyle
      variant={variant}
      rounded={rounded}
      color={color}
      txtColor={txtColor}
      className={`button ${className}`}
      style={style}
      onClick={action}
      href={url}
      target={blank ? '_blank' : ''}
      rel={getRelationshipAttributes()}
      value={value}
      iconPosition={iconPosition}
      data-testid={dataTestId}
      data-event={eventId}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {icon && <Icon icon={icon} />}
      {value && <span>{value}</span>}
    </Styles.ButtonLinkStyle>
  );
};

export default ButtonLink;
