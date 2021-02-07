import React from 'react';
import { Icon } from '../..';
import * as Styles from './styles';

interface LabelProps {
  kai?: boolean;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const Label = (props: LabelProps) => {
  const { value, kai = false, className = 'label', style } = props;
  return (
    <Styles.LabelStyle className={className} style={style}>
      {value}
      {kai ? <Icon icon="kai" fill="hsl(0, 0%, 85%)" /> : null}
    </Styles.LabelStyle>
  );
};

export default Label;
