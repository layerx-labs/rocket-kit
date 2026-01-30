import React, { CSSProperties, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CheckboxProps {
  value: string;
  label?: string | React.ReactNode;
  checked?: boolean | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
}

const Checkbox = ({
  label,
  value,
  checked = false,
  onChange = () => {},
  error = false,
  disabled = false,
  className = 'checkbox',
  style,
  dataTestId,
  required = false,
}: CheckboxProps) => {
  const checkedRef = useRef<boolean>(checked);
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(prev => !prev);
    onChange(event);
  };

  const checkmarkClassName = useMemo(() => {
    let isCheckStr = '';
    let isDisabledStr = '';

    // if they are different
    // use the value coming from the props
    // as it is the source of truth
    if (checked !== checkedRef.current) {
      setIsChecked(checked);
      checkedRef.current = checked;
      isCheckStr = checked ? 'checked' : 'not-checked';
    } else if (isChecked) isCheckStr = 'checked';
    else isCheckStr = 'not-checked';

    if (disabled) isDisabledStr = 'disabled';
    else isDisabledStr = 'not-disabled';

    return `${isCheckStr} ${isDisabledStr}`;
  }, [checked, isChecked, disabled]);

  return (
    <label
      style={style}
      className={clsx(
        styles.wrapper,
        className,
        error && styles.hasError,
        disabled && styles.isDisabled
      )}
    >
      <span className={styles.label}>{label}</span>
      <input
        type="checkbox"
        name={value}
        defaultChecked={isChecked}
        aria-checked={isChecked}
        onChange={handleOnChange}
        disabled={disabled}
        data-testid={dataTestId}
        required={required}
        className={styles.input}
      />
      <span className={clsx(styles.checkmark, checkmarkClassName)} />
    </label>
  );
};

export default Checkbox;
