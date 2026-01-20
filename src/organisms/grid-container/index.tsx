import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface GridContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const GridContainer = (props: GridContainerProps) => {
  const { className, children } = props;
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};

export default GridContainer;
