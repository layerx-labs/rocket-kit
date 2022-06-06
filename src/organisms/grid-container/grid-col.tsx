import React from 'react';
import * as Styles from './styles';

export interface GridColProps {
  className?: string;
  size?: number;
  children?: React.ReactNode;
}

const GridCol = (props: GridColProps) => {
  const { className = 'grid-col', size = 1, children } = props;
  return (
    <Styles.GridCol className={className} size={size}>
      {children}
    </Styles.GridCol>
  );
};

export default GridCol;
