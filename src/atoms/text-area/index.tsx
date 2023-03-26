import React, { CSSProperties } from 'react';
import ErrorField from '../error-field';
import * as Styles from './styles';

export interface TextAreaProps {
  className?: string;
  style?: CSSProperties;
  height?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minlength?: number;
  maxlength?: number;
  charactersCount?: number;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  dataTestId?: string;
}

const TextArea = (props: TextAreaProps) => {
  const {
    className = 'text-area',
    style,
    height,
    name,
    placeholder,
    value,
    defaultValue,
    onChange = () => {},
    minlength,
    maxlength,
    charactersCount,
    disabled = false,
    error,
    required,
    dataTestId,
  } = props;

  return (
    <Styles.Wrapper className="text-field">
      <Styles.TextAreaStyle
        className={className}
        style={style}
        height={height}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        minlength={minlength}
        maxlength={maxlength}
        disabled={disabled}
        error={error}
        required={required}
        data-testid={dataTestId}
      />

      {charactersCount != undefined && (
        <Styles.Count>
          <span className={charactersCount < 0 ? 'negative' : ''}>
            {charactersCount}
          </span>
        </Styles.Count>
      )}
      {error ? <ErrorField error={error} /> : null}
    </Styles.Wrapper>
  );
};

export default TextArea;
