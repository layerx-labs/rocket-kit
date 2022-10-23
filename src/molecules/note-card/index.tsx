import React, { CSSProperties } from 'react';
import { NoteColor } from './types';
import * as Styles from './styles';

interface NoteCardProps {
  color?: NoteColor;
  value: any;
  buttonValue?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
}

const NoteCard = (props: NoteCardProps) => {
  const {
    color = 'grey',
    value = '',
    buttonValue = '',
    onClick,
    className = 'note-card',
    style,
    dataTestId,
  } = props;

  return (
    <Styles.Wrapper
      className={className}
      color={color}
      buttonValue={buttonValue}
      style={style}
      data-testid={dataTestId}
    >
      <div>
        <p data-testid={dataTestId?.concat('-value')}>{value}</p>
      </div>
      {buttonValue && onClick && (
        <div>
          <button onClick={onClick}>{buttonValue}</button>
        </div>
      )}
    </Styles.Wrapper>
  );
};

export default NoteCard;
