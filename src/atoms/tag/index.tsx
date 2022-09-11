import React, { CSSProperties } from 'react';
import { TagVariant, TagColor } from './types';
import * as Styles from './styles';

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
    className = 'tag',
    style,
  } = props;

  return (
    <Styles.TagWrapper
      className={className}
      variant={variant}
      color={color}
      txtColor={txtColor}
      style={style}
      title={value}
    >
      {value}
    </Styles.TagWrapper>
  );
};

export default Tag;
