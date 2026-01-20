import React from 'react';
import clsx from 'clsx';
import { Label } from '../..';
import styles from './styles.module.css';

export interface FormGroupProps {
  currency?: 'lx' | 'vote' | 'tkai' | 'vkai' | undefined;
  label: string;
  error?: boolean;
  children: React.ReactNode;
}

const FormGroup = (props: FormGroupProps) => {
  const { label, currency, error = false, children } = props;

  return (
    <div className={clsx(styles.wrapper, error && styles.hasError)}>
      <Label value={label} currency={currency} />
      {children}
    </div>
  );
};

export default FormGroup;
