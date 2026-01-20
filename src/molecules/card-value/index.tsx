import React from 'react';
import clsx from 'clsx';
import { Button, Label } from '../..';
import styles from './styles.module.css';

export interface CardValueProps {
  label: string;
  currency?: 'lx' | 'vote' | 'tkai' | 'vkai' | undefined;
  value: string | number;
  description?: string;
  buttonValue?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
  dataTestId?: string;
}

const CardValue = (props: CardValueProps) => {
  const {
    label,
    currency,
    value,
    description,
    buttonValue,
    onClick,
    className,
    style,
    dataTestId,
  } = props;

  return (
    <div
      className={clsx(styles.cardValue, className)}
      style={style}
      data-testid={dataTestId}
    >
      <Label value={label} currency={currency} />
      <span>{value}</span>
      {description && <p>{description}</p>}
      {buttonValue && onClick && (
        <Button
          color="grey150"
          txtColor="grey500"
          value={buttonValue}
          action={onClick}
        />
      )}
    </div>
  );
};

export default CardValue;
