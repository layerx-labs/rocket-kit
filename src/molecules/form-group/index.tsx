import React from 'react';
import { Label } from '../..';
import * as Styles from './styles';

export interface FormGroupProps {
  currency?: 'tkai' | 'vkai' | undefined;
  label: string;
  error?: boolean;
  children: React.ReactNode;
}

const FormGroup = (props: FormGroupProps) => {
  const { label, currency, error = false, children } = props;

  return (
    <Styles.Wrapper error={error}>
      <Label value={label} currency={currency} />
      {children}
    </Styles.Wrapper>
  );
};

export default FormGroup;
