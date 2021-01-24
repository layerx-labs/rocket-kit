import React from 'react';
import { TagVariant, TagColor } from './types';
import * as Styles from './styles';

interface TagProps {
  variant?: TagVariant;
  color?: TagColor;
  value: string;
}

const Tag = (props: TagProps) => {
  const { variant = 'solid', color = 'info', value } = props;
  return (
    <Styles.TagWrapper className="tag" variant={variant} color={color}>
      {value}
    </Styles.TagWrapper>
  );
};

export default Tag;
