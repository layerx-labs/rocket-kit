import React from 'react';
import clsx from 'clsx';
import Icon from '../../atoms/icon';
import styles from './styles.module.css';

export interface ErrorProps {
  variant?: 'default' | 'minimal';
  value: string;
}

const Error = (props: ErrorProps) => {
  const { variant = 'default', value } = props;

  return (
    <div
      className={clsx(
        styles.wrapper,
        variant === 'default' ? styles.variantDefault : styles.variantMinimal
      )}
    >
      {variant === 'default' ? (
        <Icon icon="warning" fill="hsl(354, 83%, 64%)" />
      ) : (
        <span>¯\\_(ツ)_/¯</span>
      )}
      {value && <span>{value}</span>}
    </div>
  );
};

export default Error;
