import React, { CSSProperties } from 'react';
import { TagVariant, TagColor } from './types';
import * as Styles from './styles';

export interface TagProps {
  variant?: TagVariant;
  color?: TagColor;
  value: string;
  className?: string;
  style?: CSSProperties;
}

const Tag = (props: TagProps) => {
  const {
    variant = 'solid',
    color = 'grey',
    value,
    className = 'tag',
    style,
  } = props;
  return (
    <Styles.TagWrapper
      className={className}
      variant={variant}
      color={color}
      style={style}
      title={value}
    >
      {value}
    </Styles.TagWrapper>
  );
};

export default Tag;
