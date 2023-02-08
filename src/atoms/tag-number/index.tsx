import React, { CSSProperties } from 'react';
import * as Styles from './styles';
import { TagColor } from '../tag/types';

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
    className = 'tag-number',
    style,
    color = 'purple500',
    valueColor = 'white',
    label,
    value,
  } = props;

  return (
    <Styles.TagWrapper
      className={className}
      style={style}
      color={color}
      valueColor={valueColor}
    >
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </Styles.TagWrapper>
  );
};

export default TagNumber;
