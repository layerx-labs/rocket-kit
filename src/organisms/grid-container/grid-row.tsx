import React from 'react';
import clsx from 'clsx';
import { GridContainerProps } from '.';
import styles from './styles.module.css';

const GridRow = (props: GridContainerProps) => {
  const { className = 'grid-row', children } = props;
  return <div className={clsx(styles.gridRow, className)}>{children}</div>;
};

export default GridRow;
