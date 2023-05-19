import React, { CSSProperties } from 'react';
import { ErrorField } from '../..';
import * as Styles from './styles';
import { TextFieldType } from './types';

interface TextFieldProps {
  type?: TextFieldType;
  error?: string;
  icon?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
  style?: CSSProperties;
  min?: number;
  max?: number;
  pattern?: string;
  required?: boolean;
}

const TextField = (props: TextFieldProps) => {
  const {
    type = 'text',
    icon,
    name,
    value,
    defaultValue,
    onChange = () => {},
    placeholder = '',
    min,
    max,
    disabled = false,
    error,
    dataTestId,
    className = 'text-field',
    style,
    pattern,
    required = false,
  } = props;

  return (
    <>
      <Styles.TextFieldInputStyle
        icon={icon}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        disabled={disabled}
        error={error}
        data-testid={dataTestId}
        className={className}
        style={style}
        pattern={pattern}
        required={required}
      />
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default TextField;
