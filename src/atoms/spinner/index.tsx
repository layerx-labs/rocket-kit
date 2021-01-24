import React, { CSSProperties } from 'react';
import * as Styles from './styles';

interface SpinnerProps {
  fill?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
}

const Spinner = (props: SpinnerProps) => {
  const {
    fill = '#7a7a7a',
    size = '20px',
    className = 'spinner',
    style,
  } = props;
  return (
    <Styles.Loading
      className={className}
      fill={fill}
      size={size}
      style={style}
    />
  );
};

export default Spinner;
