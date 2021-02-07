import React from 'react';
import { Icon } from '../..';
import * as Styles from './styles';

interface LabelProps {
  kai?: boolean;
  value: string;
}

const Label = (props: LabelProps) => {
  const { value, kai = false } = props;
  return (
    <Styles.LabelStyle>
      {value}
      {kai ? <Icon icon="kai" fill="hsl(0, 0%, 85%)" /> : null}
    </Styles.LabelStyle>
  );
};

export default Label;
