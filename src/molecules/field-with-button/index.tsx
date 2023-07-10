import React, { useState } from 'react';
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
  disabled?: boolean;
  dataTestId?: string;
  buttonIcon: string;
  buttonValue?: string;
  buttonAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string | number | null
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
    disabled = false,
  } = props;

  const [fieldValue, setFieldValue] = useState<string | number | null>(
    value ?? null
  );

  return (
    <Styles.Wrapper>
      {label && <Label value={label} />}

      <Styles.Field>
        <TextField
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          dataTestId={dataTestId}
          value={fieldValue ?? undefined}
          onChange={e => {
            e.preventDefault();
            if (e.target.value === '' || e.target.value === ' ') {
              setFieldValue(null);
              return;
            }
            setFieldValue(e.target.value);
          }}
        />
        <Button
          color="purple100"
          icon={buttonIcon}
          value={buttonValue}
          disabled={buttonDisabled}
          action={e => buttonAction?.(e, fieldValue)}
        />
      </Styles.Field>
    </Styles.Wrapper>
  );
};

export default FieldWidthButton;
