import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import ErrorField from '../error-field';
import styles from './styles.module.css';

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

  const textareaStyle = height
    ? ({ '--textareaHeight': height, ...style } as CSSProperties & Record<string, string>)
    : style;

  return (
    <div className={clsx(styles.wrapper, 'text-field')}>
      <textarea
        className={clsx(styles.textarea, className, error && styles.hasError)}
        style={textareaStyle}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        minLength={minlength}
        maxLength={maxlength}
        disabled={disabled}
        required={required}
        data-testid={dataTestId}
      />

      {charactersCount != undefined && (
        <div className={styles.count}>
          <span className={charactersCount < 0 ? 'negative' : ''}>
            {charactersCount}
          </span>
        </div>
      )}
      {error ? <ErrorField error={error} /> : null}
    </div>
  );
};

export default TextArea;
