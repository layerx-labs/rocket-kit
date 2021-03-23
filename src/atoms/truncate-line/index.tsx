import React, { CSSProperties } from 'react';
import * as Styles from './styles';

export interface TruncateLineProps {
  value: string;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
}

const TruncateLine = (props: TruncateLineProps) => {
  const { value, className = 'truncate', style, dataTestId } = props;
  return (
    <Styles.TruncateWrapper
      className={className}
      style={style}
      data-testid={dataTestId}
    >
      <span>{value}</span>
    </Styles.TruncateWrapper>
  );
};

export default TruncateLine;
