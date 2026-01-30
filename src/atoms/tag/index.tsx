import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { TagVariant, TagColor } from './types';
import styles from './styles.module.css';
import { useColor } from '../../utils/hooks/use-color';

export interface TagProps {
  variant?: TagVariant;
  color?: TagColor;
  txtColor?: TagColor;
  value: string;
  className?: string;
  style?: CSSProperties;
}

const Tag = (props: TagProps) => {
  const {
    variant = 'solid',
    color = 'purple500',
    txtColor = 'white',
    value,
    className,
    style,
  } = props;

  const bgColor = useColor(color);
  const textColor = useColor(txtColor);

  const cssVars = {
    '--bg': bgColor.color,
    '--txt': textColor.color,
    ...style,
  } as CSSProperties & Record<string, string>;

  return (
    <span
      className={clsx(
        'tag',
        styles.tag,
        variant === 'solid' ? styles.variantSolid : styles.variantOutline,
        className
      )}
      style={cssVars}
      title={value}
    >
      {value}
    </span>
  );
};

export default Tag;
