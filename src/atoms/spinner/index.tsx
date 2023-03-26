import React, { CSSProperties } from 'react';
import { colors } from '../../ions/variables';
import * as Styles from './styles';

interface SpinnerProps {
  fill?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
}

const Spinner = (props: SpinnerProps) => {
  const {
    fill = colors.grey200,
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
