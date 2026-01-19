import React from 'react';
import clsx from 'clsx';
import { ErrorField } from '../..';
import TextField from '../text-field';
import { TextFieldType } from '../text-field/types';
import styles from './styles.module.css';

export interface TextFieldAppendixProps {
  append?: string;
  prepend?: string;
  type?: TextFieldType;
  error?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
  min?: number;
  max?: number;
  pattern?: string;
  required?: boolean;
}

const TextFieldAppendix = (props: TextFieldAppendixProps) => {
  const {
    append,
    prepend,
    type = 'text',
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
    className,
    pattern,
    required = false,
  } = props;

  return (
    <>
      <div className={clsx(styles.wrapper, error && styles.hasError, className)}>
        {prepend && (
          <div className={clsx(styles.appendix, styles.appendixLeft, error && styles.hasError)}>
            <span>{prepend}</span>
          </div>
        )}
        <TextField
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          max={max}
          disabled={disabled}
          data-testid={dataTestId}
          pattern={pattern}
          required={required}
        />
        {append && (
          <div className={clsx(styles.appendix, styles.appendixRight, error && styles.hasError)}>
            <span>{append}</span>
          </div>
        )}
      </div>
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default TextFieldAppendix;
