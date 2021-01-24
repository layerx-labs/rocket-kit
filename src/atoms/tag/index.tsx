import React from 'react';
import * as Styles from './styles';
import { TagVariant, TagColor } from './types';

interface TagProps {
  variant?: TagVariant;
  color?: TagColor;
  value: string;
}

const Tag = (props: TagProps) => {
  const { variant = 'solid', color = 'primary', value } = props;
  return (
    <Styles.TagWrapper className="tag" variant={variant} color={color}>
      {value}
    </Styles.TagWrapper>
  );
};

export default Tag;
