import React from 'react';
import { ErrorField } from '../..';
import TextField from '../text-field';
import { TextFieldType } from '../text-field/types';
import * as Styles from './styles';

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
    className = 'text-field-appendix',
    pattern,
    required = false,
  } = props;

  return (
    <>
      <Styles.Wrapper className={className} error={error}>
        {prepend && (
          <Styles.Appendix error={error} position="left">
            <span>{prepend}</span>
          </Styles.Appendix>
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
          <Styles.Appendix error={error} position="right">
            <span>{append}</span>
          </Styles.Appendix>
        )}
      </Styles.Wrapper>
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default TextFieldAppendix;
