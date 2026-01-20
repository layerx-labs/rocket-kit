import React from 'react';
import clsx from 'clsx';
import ErrorField from '../../atoms/error-field';
import styles from './styles.module.css';

export type Item = {
  value: string;
  label: string;
  disabled: boolean;
  checked: boolean | undefined;
};

export interface RadioGroupProps {
  className?: string;
  style?: React.CSSProperties;
  options: Item[];
  type?: 'row' | 'column';
  group: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  dataTestId?: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    className = 'radio-group',
    style,
    options,
    type = 'column',
    group,
    onChange,
    error,
    disabled = false,
    dataTestId,
  } = props;

  return (
    <div style={style} className={className}>
      <ul
        className={clsx(
          styles.wrapper,
          type === 'row' ? styles.typeRow : styles.typeColumn
        )}
        data-testid={dataTestId}
      >
        {options.map((value, index) => (
          <li
            key={index}
            className={clsx(
              styles.item,
              error && styles.hasError,
              (value.disabled || disabled) && styles.isDisabled
            )}
          >
            <input
              id={`radio-${group}-${index}`}
              type="radio"
              name={group}
              value={value.value}
              checked={value.checked}
              onChange={onChange}
              disabled={value.disabled || disabled}
            />
            <label htmlFor={`radio-${group}-${index}`}>{value.label}</label>
            <div className="check" />
          </li>
        ))}
      </ul>
      {error ? <ErrorField error={error} /> : null}
    </div>
  );
};

export default RadioGroup;
