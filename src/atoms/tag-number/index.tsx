import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { TagColor } from '../tag/types';
import { useColor } from '../../utils/hooks/use-color';

export interface TagNumberProps {
  className?: string;
  style?: CSSProperties;
  color?: TagColor;
  valueColor?: TagColor;
  label: string;
  value: number | string;
}

const TagNumber = (props: TagNumberProps) => {
  const {
    className,
    style,
    color = 'purple500',
    valueColor = 'white',
    label,
    value,
  } = props;

  const bgColor = useColor(color);
  const valColor = useColor(valueColor);

  const cssVars = {
    '--bg': bgColor.color,
    '--valueColor': valColor.color,
    ...style,
  } as CSSProperties & Record<string, string>;

  return (
    <div className={clsx(styles.wrapper, className)} style={cssVars}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default TagNumber;
