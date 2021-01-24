import React from 'react';
import { NoteColor } from './types';
import * as Styles from './styles';

interface NoteCardProps {
  color?: NoteColor;
  value: any;
  buttonValue?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const NoteCard = (props: NoteCardProps) => {
  const { color = 'info', value = '', buttonValue = '', onClick } = props;

  return (
    <Styles.Wrapper
      className="note-card"
      color={color}
      buttonValue={buttonValue}
    >
      <div>
        <p>{value}</p>
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
