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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  dataTestId?: string;
  required?: boolean;
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
    onChange,
    disabled = false,
    error = '',
    dataTestId,
    required = false,
    buttonIcon,
    buttonValue,
    buttonAction,
    buttonDisabled,
  } = props;

  return (
    <Styles.Wrapper data-testid={dataTestId}>
      {label && (
        <Label dataTestId={dataTestId?.concat('-label')} value={label} />
      )}

      <Styles.Field>
        <TextField
          minimal={false}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          dataTestId={dataTestId}
          required={required}
        />
        <Button
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
