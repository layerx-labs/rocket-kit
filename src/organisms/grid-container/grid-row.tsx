import React from 'react';
import { GridContainerProps } from '.';
import * as Styles from './styles';

const GridRow = (props: GridContainerProps) => {
  const { className = 'grid-row', children } = props;
  return <Styles.GridRow className={className}>{children}</Styles.GridRow>;
};

export default GridRow;
