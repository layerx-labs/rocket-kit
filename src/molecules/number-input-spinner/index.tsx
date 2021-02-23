import React, { useState } from 'react';
import * as Styles from './styles';
import { Icon } from '../..';

export interface NumberInputSpinnerProps {
  removeAriaLabel?: string;
  addAriaLabel?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  value?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const NumberInputSpinner = (props: NumberInputSpinnerProps) => {
  const {
    removeAriaLabel = 'Decrease Value',
    addAriaLabel = 'Increase Value',
    pattern = '(10|([0-9]?))',
    minLength = 1,
    maxLength = 2,
    value = 0,
    onChange = () => {},
    disabled = false,
  } = props;

  const [number, setNumber] = useState(value);

  return (
    <Styles.Wrapper>
      <Styles.Button
        className="remove-button"
        aria-label={removeAriaLabel}
        onClick={() => setNumber(number - 1)}
        disabled={disabled}
      >
        <Icon icon="remove" />
      </Styles.Button>
      <Styles.Input
        type="text"
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        value={number}
        onChange={onChange}
        disabled={disabled}
      />
      <Styles.Button
        className="add-button"
        aria-label={addAriaLabel}
        onClick={() => setNumber(number + 1)}
        disabled={disabled}
      >
        <Icon icon="add" />
      </Styles.Button>
    </Styles.Wrapper>
  );
};

export default NumberInputSpinner;
