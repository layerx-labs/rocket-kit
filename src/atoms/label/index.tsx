import React from 'react';
import * as Styles from './styles';

import { colors } from '../../ions/variables';
import { Icon } from '../..';

export interface LabelProps {
  currency?: 'tkai' | 'vkai' | undefined;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const Label = (props: LabelProps) => {
  const { value, currency, className = 'label', style } = props;
  return (
    <Styles.LabelStyle className={className} style={style}>
      {value}
      {currency === 'tkai' && <Icon icon="tkai" fill={colors.grey200} />}
      {currency === 'vkai' && <Icon icon="vkai" fill={colors.grey200} />}
    </Styles.LabelStyle>
  );
};

export default Label;
