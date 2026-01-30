import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface GridColProps {
  className?: string;
  size?: number;
  children?: React.ReactNode;
}

const GridCol = (props: GridColProps) => {
  const { className = 'grid-col', size = 1, children } = props;

  const colStyle = {
    '--gridColSize': size,
  } as CSSProperties & Record<string, number>;

  return (
    <div className={clsx(styles.gridCol, className)} style={colStyle}>
      {children}
    </div>
  );
};

export default GridCol;
