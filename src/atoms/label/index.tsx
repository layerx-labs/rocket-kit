import React from 'react';
import * as Styles from './styles';

import { colors } from '../../ions/variables';
import { Icon } from '../..';

export interface LabelProps {
  currency?: 'tkai' | 'vkai';
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const { grey } = colors;

const Label = (props: LabelProps) => {
  const { value, currency = 'tkai', className = 'label', style } = props;
  return (
    <Styles.LabelStyle className={className} style={style}>
      {value}
      {currency === 'tkai' && <Icon icon="tkai" fill={grey} />}
      {currency === 'vkai' && <Icon icon="vkai" fill={grey} />}
    </Styles.LabelStyle>
  );
};

export default Label;
