import React from 'react';
import * as Styles from './styles';

import { colors } from '../../ions/variables';
import { Icon } from '../..';

export interface LabelProps {
  currency?: 'lx' | 'vote' | 'tkai' | 'vkai' | undefined;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const Label = (props: LabelProps) => {
  const { value, currency, className = 'label', style } = props;
  return (
    <Styles.LabelStyle className={className} style={style}>
      {value}
      {currency && <Icon icon={currency} fill={colors.grey200} />}
    </Styles.LabelStyle>
  );
};

export default Label;
