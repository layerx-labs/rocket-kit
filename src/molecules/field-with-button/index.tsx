import React from 'react';
import Label from '../../atoms/label';
import TextField from '../../atoms/text-field';
import { TextFieldType } from '../../atoms/text-field/types';
import Button from '../../atoms/button';
import * as Styles from './styles';

export interface FieldWidthButtonProps {
  label?: string;
  type?: TextFieldType;
  name?: string;
  placeholder?: string;
  value?: string | number;
  dataTestId?: string;
  buttonIcon: string;
  buttonValue?: string;
  buttonAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  buttonDisabled?: boolean;
}

const FieldWidthButton = (props: FieldWidthButtonProps) => {
  const {
    label,
    type = 'text',
    name,
    placeholder,
    value,
    dataTestId,
    buttonIcon,
    buttonValue,
    buttonAction,
    buttonDisabled,
  } = props;

  return (
    <Styles.Wrapper>
      {label && <Label value={label} />}

      <Styles.Field>
        <TextField
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          dataTestId={dataTestId}
          disabled
        />
        <Button
          color="purple100"
          icon={buttonIcon}
          value={buttonValue}
          action={buttonAction}
          disabled={buttonDisabled}
        />
      </Styles.Field>
    </Styles.Wrapper>
  );
};

export default FieldWidthButton;
