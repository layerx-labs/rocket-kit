import React from 'react';
import { Label } from '../..';
import * as Styles from './styles';

export interface FormGroupProps {
  kai?: boolean;
  label: string;
  children: React.ReactNode;
}

const FormGroup = (props: FormGroupProps) => {
  const { label, kai = false, children } = props;

  return (
    <Styles.Wrapper>
      <Label value={label} kai={kai} />
      {children}
    </Styles.Wrapper>
  );
};

export default FormGroup;
