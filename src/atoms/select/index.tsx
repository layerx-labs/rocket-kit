import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import ErrorField from '../error-field';
import styles from './styles.module.css';

export interface SelectProps {
  placeholder?: string;
  options: any;
  defaultValue?: string | number;
  value?: string | number;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  dataTestId?: string;
  className?: string;
  style?: CSSProperties;
}

const Select = (props: SelectProps) => {
  const {
    placeholder,
    options,
    defaultValue,
    value,
    name,
    onChange = () => {},
    error,
    disabled = false,
    dataTestId,
    className,
    style,
  } = props;

  const selectOptions = options.map(
    (value: { value: string; name: string }) => (
      <option key={value.value} value={value.value}>
        {value.name}
      </option>
    )
  );

  return (
    <>
      <select
        className={clsx(styles.select, error && styles.hasError, className)}
        style={style}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        disabled={disabled}
        data-testid={dataTestId}
      >
        {placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {selectOptions}
      </select>
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default Select;
