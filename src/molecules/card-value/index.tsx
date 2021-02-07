import React from 'react';
import { Button, Label } from '../..';
import * as Styles from './styles';

interface CardValueProps {
  label: string;
  kai?: boolean;
  value: string | number;
  showArrowButton?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CardValue = (props: CardValueProps) => {
  const {
    label,
    kai = false,
    value,
    showArrowButton = false,
    onClick,
    className = 'card-value',
    style,
  } = props;

  return (
    <Styles.CardValueStyle className={className} style={style}>
      <Label value={label} kai={kai} />
      <span>{value}</span>
      {showArrowButton && (
        <Styles.CardValueButtonWrapper>
          <Button
            variant="outline"
            color="info"
            icon="arrowRight"
            action={onClick}
          />
        </Styles.CardValueButtonWrapper>
      )}
    </Styles.CardValueStyle>
  );
};

export default CardValue;
