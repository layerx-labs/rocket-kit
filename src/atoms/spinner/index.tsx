import React from 'react';
import * as Styles from './styles';

interface SpinnerProps {
  fill?: string;
  size?: string;
}

const Spinner = (props: SpinnerProps) => {
  const { fill = '#ffffff', size = '20px' } = props;
  return <Styles.Loading className="spinner" fill={fill} size={size} />;
};

export default Spinner;
