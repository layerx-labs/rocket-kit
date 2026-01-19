import React, { useState, CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CheckboxButtonProps {
  label?: string | React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: () => {};
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
}

const CheckboxButton = (props: CheckboxButtonProps) => {
  const {
    label,
    value,
    checked = false,
    onChange = () => {},
    disabled = false,
    className = 'checkbox-button',
    style,
    dataTestId,
    required = false,
  } = props;

  const [buttonChecked, setButtonChecked] = useState(checked);

  return (
    <label
      style={style}
      className={clsx(
        styles.wrapper,
        className,
        buttonChecked && styles.isChecked,
        disabled && styles.isDisabled
      )}
    >
      <span className={styles.label}>{label}</span>
      <input
        type="checkbox"
        name={value}
        defaultChecked={checked}
        aria-checked={checked}
        onChange={onChange}
        disabled={disabled}
        data-testid={dataTestId}
        required={required}
        className={styles.input}
        onClick={() => {
          setButtonChecked(!buttonChecked);
        }}
      />
      <span className={styles.checkmark} />
    </label>
  );
};

export default CheckboxButton;
