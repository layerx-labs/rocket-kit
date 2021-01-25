import React, { CSSProperties } from 'react';
import * as Styles from './styles';
import { ErrorFieldColor } from './types';

interface ErrorFieldProps {
  color?: ErrorFieldColor;
  error: string;
  className?: string;
  style?: CSSProperties;
}

const ErrorField = (props: ErrorFieldProps) => {
  const { color = 'danger', error, className = 'error-field', style } = props;
  return (
    <Styles.ErrorStyle color={color} className={className} style={style}>
      {error}
    </Styles.ErrorStyle>
  );
};

export default ErrorField;
