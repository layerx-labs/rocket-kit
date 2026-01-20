import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ErrorFieldColor } from './types';

export interface ErrorFieldProps {
  color?: ErrorFieldColor;
  error: string;
  className?: string;
  style?: CSSProperties;
}

const ErrorField = (props: ErrorFieldProps) => {
  const { color = 'red', error, className = 'error-field', style } = props;
  return (
    <span
      className={clsx(
        styles.errorField,
        color === 'success' && styles.colorSuccess,
        className
      )}
      style={style}
    >
      {error}
    </span>
  );
};

export default ErrorField;
