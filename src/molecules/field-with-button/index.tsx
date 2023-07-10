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
  onChange?: (value: string | number | null) => void;
  buttonAction?: (value: string | number | null) => void | Promise<void>;
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
    dataTestId,
    buttonIcon,
    buttonValue,
    buttonAction,
    buttonDisabled,
    disabled = true,
  } = props;

  const [loading, setLoading] = useState(false);
  const [fieldValue, setFieldValue] = useState<string | number | null>(
    value ?? null
  );

  const handleOnClickAction = async () => {
    if (buttonAction?.constructor.name !== 'AsyncFunction') {
      buttonAction?.(fieldValue);
      return;
    }

    setLoading(true);
    await buttonAction?.(fieldValue);
    setLoading(false);
  };

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
              onChange?.(e.target.value);
            } else {
              setFieldValue(e.target.value);
              onChange?.(e.target.value);
            }
          }}
        />

        <Button
          color="purple100"
          loading={loading}
          icon={buttonIcon}
          value={buttonValue}
          disabled={buttonDisabled}
          action={e => {
            e.preventDefault();
            handleOnClickAction();
          }}
        />
      </Styles.Field>
    </Styles.Wrapper>
  );
};

export default FieldWidthButton;
