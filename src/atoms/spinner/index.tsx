import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { colors } from '../../ions/variables';
import styles from './styles.module.css';

export interface SpinnerProps {
  fill?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
}

const Spinner = (props: SpinnerProps) => {
  const {
    fill = colors.grey200,
    size = '20px',
    className,
    style,
  } = props;

  const cssVars = {
    '--spinnerFill': fill,
    '--spinnerSize': size,
    ...style,
  } as CSSProperties & Record<string, string>;

  return (
    <div
      className={clsx(styles.spinner, className)}
      style={cssVars}
    />
  );
};

export default Spinner;
