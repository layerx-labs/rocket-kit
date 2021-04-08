import React from 'react';
import { Label } from '../..';
import * as Styles from './styles';

export interface FormGroupProps {
  kai?: boolean;
  label: string;
  error?: boolean;
  children: React.ReactNode;
}

const FormGroup = (props: FormGroupProps) => {
  const { label, kai = false, error = false, children } = props;

  return (
    <Styles.Wrapper error={error}>
      <Label value={label} kai={kai} />
      {children}
    </Styles.Wrapper>
  );
};

export default FormGroup;
