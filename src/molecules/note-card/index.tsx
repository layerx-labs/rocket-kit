import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { NoteColor } from './types';
import styles from './styles.module.css';

export interface NoteCardProps {
  color?: NoteColor;
  value: any;
  buttonValue?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: CSSProperties;
}

const NoteCard = (props: NoteCardProps) => {
  const {
    color = 'grey',
    value = '',
    buttonValue = '',
    onClick,
    className = 'note-card',
    style,
  } = props;

  const colorClass =
    color === 'grey'
      ? styles.colorGrey
      : color === 'green'
        ? styles.colorGreen
        : styles.colorRed;

  return (
    <div
      className={clsx(
        styles.wrapper,
        colorClass,
        buttonValue && styles.hasButton,
        className
      )}
      style={style}
    >
      <div>
        <p>{value}</p>
      </div>
      {buttonValue && onClick && (
        <div>
          <button onClick={onClick}>{buttonValue}</button>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
