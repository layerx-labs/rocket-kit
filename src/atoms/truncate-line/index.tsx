import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface TruncateLineProps {
  value: string;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
}

const TruncateLine = (props: TruncateLineProps) => {
  const { value, className, style, dataTestId } = props;
  return (
    <div
      className={clsx(styles.wrapper, className)}
      style={style}
      data-testid={dataTestId}
    >
      <span>{value}</span>
    </div>
  );
};

export default TruncateLine;
