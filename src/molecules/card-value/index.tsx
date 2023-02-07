import React from 'react';
import { Button, Label } from '../..';
import * as Styles from './styles';

export interface CardValueProps {
  label: string;
  currency?: 'tkai' | 'vkai';
  value: string | number;
  description?: string;
  buttonValue?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CardValue = (props: CardValueProps) => {
  const {
    label,
    currency = 'tkai',
    value,
    description,
    buttonValue,
    onClick,
    className = 'card-value',
    style,
  } = props;

  return (
    <Styles.CardValueStyle className={className} style={style}>
      <Label value={label} currency={currency} />
      <span>{value}</span>
      {description && <p>{description}</p>}
      {buttonValue && onClick && (
        <Styles.CardValueButtonWrapper>
          <Button color="grey" value={buttonValue} action={onClick} />
        </Styles.CardValueButtonWrapper>
      )}
    </Styles.CardValueStyle>
  );
};

export default CardValue;
