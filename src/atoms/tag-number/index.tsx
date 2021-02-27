import React, { CSSProperties } from 'react';
import * as Styles from './styles';

export interface TagNumberProps {
  label: string;
  value: number;
  className?: string;
  style?: CSSProperties;
}

const TagNumber = (props: TagNumberProps) => {
  const { label, value, className = 'tag-number', style } = props;
  return (
    <Styles.TagWrapper className={className} style={style} title={label}>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </Styles.TagWrapper>
  );
};

export default TagNumber;
