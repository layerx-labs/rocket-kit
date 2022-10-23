import React from 'react';
import * as Styles from './styles';

import { colors } from '../../ions/variables';
import { Icon } from '../..';

interface LabelProps {
  kai?: boolean;
  value: string;
  className?: string;
  style?: React.CSSProperties;
  dataTestId?: string;
}

const { grey } = colors;

const Label = (props: LabelProps) => {
  const { value, kai = false, className = 'label', style, dataTestId } = props;
  return (
    <Styles.LabelStyle
      data-testid={dataTestId}
      className={className}
      style={style}
    >
      {value}
      {kai ? <Icon icon="kai" fill={grey} /> : null}
    </Styles.LabelStyle>
  );
};

export default Label;
