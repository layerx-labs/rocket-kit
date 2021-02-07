import React from 'react';
import * as Styles from './styles';

import { colors } from '../../ions/variables';
import { Icon } from '../..';

interface LabelProps {
  kai?: boolean;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const { info } = colors;

const Label = (props: LabelProps) => {
  const { value, kai = false, className = 'label', style } = props;
  return (
    <Styles.LabelStyle className={className} style={style}>
      {value}
      {kai ? <Icon icon="kai" fill={info} /> : null}
    </Styles.LabelStyle>
  );
};

export default Label;
