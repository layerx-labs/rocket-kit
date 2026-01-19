import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { Icon } from '../..';
import { ButtonColor, ButtonVariant } from '../button/types';
import styles from './styles.module.css';
import { useColor } from '../../utils/hooks/use-color';
import { colors } from '../../ions/variables';

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

  const bgColor = useColor(color ?? 'black');
  const textColor = useColor(
    variant === 'outline' && !txtColor ? (color ?? 'black') : (txtColor ?? 'white')
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
    '--buttonPadding': value ? '0 var(--buttonPaddingX)' : '0',
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

  const getRelationshipAttributes = () => {
    if (rel && rel !== '') return rel;
    return blank ? 'noopener noreferrer' : '';
  };

  return (
    <a
      className={clsx(
        styles.buttonLink,
        variantClass,
        variant !== 'text' && (rounded ? styles.rounded : styles.notRounded),
        !value && styles.iconOnly,
        iconPosition === 'left' ? styles.iconLeft : styles.iconRight,
        'button',
        className
      )}
      style={cssVars}
      onClick={action}
      href={url}
      target={blank ? '_blank' : ''}
      rel={getRelationshipAttributes()}
      data-testid={dataTestId}
      data-event={eventId}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {icon && <Icon icon={icon} />}
      {value && <span>{value}</span>}
    </a>
  );
};

export default ButtonLink;
