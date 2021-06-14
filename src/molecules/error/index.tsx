import React from 'react';
import Icon from '../../atoms/icon';
import * as Styles from './styles';

export interface ErrorProps {
  variant?: 'default' | 'minimal';
  value: string;
}

const Error = (props: ErrorProps) => {
  const { variant = 'default', value } = props;

  return (
    <Styles.Wrapper variant={variant}>
      {variant === 'default' ? (
        <Icon icon="warning" fill="hsl(354, 83%, 64%)" />
      ) : (
        <span>¯\\_(ツ)_/¯</span>
      )}
      {value && <span>{value}</span>}
    </Styles.Wrapper>
  );
};

export default Error;
