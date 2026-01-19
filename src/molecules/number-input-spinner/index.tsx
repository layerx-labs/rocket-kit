import React, { CSSProperties, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../..';
import styles from './styles.module.css';

export interface NumberInputSpinnerProps {
  decreaseAriaLabel?: string;
  increaseAriaLabel?: string;
  increment?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

const NumberInputSpinner = (props: NumberInputSpinnerProps) => {
  const {
    decreaseAriaLabel = 'Decrease Value',
    increaseAriaLabel = 'Increase Value',
    increment = 1,
    min = 0,
    max = 10,
    value = 0,
    onChange,
    disabled = false,
  } = props;
  const isFirstRender = useRef(true);
  const [number, setNumber] = useState(value);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setNumber(value);
  }, [value]);

  const updateValue = (value: number) => {
    if (onChange) {
      onChange(value);
    }
    setNumber(value);
  };

  // Calculate input width based on max value length
  const inputWidth =
    max != null && max.toString().length > 5
      ? max.toString().length * 10 + 20 + 'px'
      : '70px';

  const inputStyle = {
    '--inputWidth': inputWidth,
  } as CSSProperties & Record<string, string>;

  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.button, styles.removeButton)}
        aria-label={decreaseAriaLabel}
        onClick={evt => {
          evt.preventDefault();
          updateValue(number - increment > min ? number - increment : min);
        }}
        disabled={number <= min || disabled}
      >
        <Icon icon="remove" />
      </button>
      <input
        className={styles.input}
        type="number"
        min={min}
        max={max}
        value={number}
        onChange={evt => {
          evt.preventDefault();
          updateValue(parseInt(evt.target.value));
        }}
        disabled={disabled}
        style={inputStyle}
      />
      <button
        className={clsx(styles.button, styles.addButton)}
        aria-label={increaseAriaLabel}
        onClick={evt => {
          evt.preventDefault();
          updateValue(number + increment < max ? number + increment : max);
        }}
        disabled={number >= max || disabled}
      >
        <Icon icon="add" />
      </button>
    </div>
  );
};

export default NumberInputSpinner;
