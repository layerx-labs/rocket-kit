import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { colors } from '../../ions/variables';
import { Icon } from '../..';

export interface LabelProps {
  currency?: 'lx' | 'vote' | 'tkai' | 'vkai' | undefined;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const Label = (props: LabelProps) => {
  const { value, currency, className, style } = props;
  return (
    <label className={clsx(styles.label, className)} style={style}>
      {value}
      {currency && <Icon icon={currency} fill={colors.grey200} />}
    </label>
  );
};

export default Label;
