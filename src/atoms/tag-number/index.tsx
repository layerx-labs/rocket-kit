import React, { CSSProperties } from 'react';
import * as Styles from './styles';

export interface TagNumberProps {
  tag: string;
  number: number;
  className?: string;
  style?: CSSProperties;
}

const TagNumber = (props: TagNumberProps) => {
  const { tag, number, className = 'tag-number', style } = props;
  return (
    <Styles.TagWrapper className={className} style={style}>
      <span className="tag">{tag}</span>
      <span className="number">{number}</span>
    </Styles.TagWrapper>
  );
};

export default TagNumber;
