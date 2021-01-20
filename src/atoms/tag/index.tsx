import React from 'react';
import * as Styles from './styles';
import { TagColor } from './types';

interface TagProps {
  color?: TagColor;
  value: string;
}

const Tag = (props: TagProps) => {
  const { color = 'primary', value } = props;
  return <Styles.TagWrapper color={color}>{value}</Styles.TagWrapper>;
};

export default Tag;
