import React from 'react';
import { Button, Label } from '../..';
import * as Styles from './styles';

interface CardValueProps {
  label: string;
  kai?: boolean;
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
    kai = false,
    value,
    description,
    buttonValue,
    onClick,
    className = 'card-value',
    style,
  } = props;

  return (
    <Styles.CardValueStyle className={className} style={style}>
      <Label value={label} kai={kai} />
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
