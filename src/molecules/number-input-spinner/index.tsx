import React, { useState } from 'react';
import * as Styles from './styles';
import { Icon } from '../..';

export interface NumberInputSpinnerProps {
  decreaseAriaLabel?: string;
  increaseAriaLabel?: string;
  increment?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange = () => {},
    disabled = false,
  } = props;

  const [number, setNumber] = useState(value);

  return (
    <Styles.Wrapper>
      <Styles.Button
        className="remove-button"
        aria-label={decreaseAriaLabel}
        onClick={() => setNumber(number - (number > min ? increment : 0))}
        disabled={number <= min || disabled}
      >
        <Icon icon="remove" />
      </Styles.Button>
      <Styles.Input
        type="number"
        min={min}
        max={max}
        value={number}
        onChange={onChange}
        disabled={disabled}
      />
      <Styles.Button
        className="add-button"
        aria-label={increaseAriaLabel}
        onClick={() => setNumber(number + (number < max ? increment : 0))}
        disabled={number >= max || disabled}
      >
        <Icon icon="add" />
      </Styles.Button>
    </Styles.Wrapper>
  );
};

export default NumberInputSpinner;
