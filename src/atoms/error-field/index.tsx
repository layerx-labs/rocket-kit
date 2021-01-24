import React from 'react';

import * as Styles from './styles';
import { ErrorFieldColor } from './types';

interface ErrorFieldProps {
  color?: ErrorFieldColor;
  error: string;
}

const ErrorField = (props: ErrorFieldProps) => {
  const { color = 'danger', error } = props;
  return <Styles.ErrorStyle color={color}>{error}</Styles.ErrorStyle>;
};

export default ErrorField;
