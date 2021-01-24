import React from 'react';
import { ErrorField } from '../..';
import * as Styles from './styles';
import { TextFieldType } from './types';

interface TextFieldProps {
  type?: TextFieldType;
  minimal?: boolean;
  error?: string;
  icon?: string;
  name?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
  min?: number;
  max?: number;
}

const TextField = (props: TextFieldProps) => {
  const {
    type = 'text',
    minimal = true,
    icon,
    name,
    value,
    onChange = () => {},
    placeholder = '',
    min,
    max,
    disabled = false,
    error,
    dataTestId,
    className,
  } = props;

  return (
    <>
      <Styles.TextFieldInputStyle
        minimal={minimal}
        icon={icon}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        disabled={disabled}
        error={error}
        data-testid={dataTestId}
        className={className}
      />
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default TextField;
