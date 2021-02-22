import React, { useState } from 'react';
import * as Styles from './styles';
import { Icon } from '../..';
import { colors } from '../../ions/variables';

const { info } = colors;

export interface NumberInputSpinnerProps {
  removeAriaLabel?: string;
  addAriaLabel?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInputSpinner = (props: NumberInputSpinnerProps) => {
  const [value, setValue] = useState(0);

  const {
    removeAriaLabel = 'Decrease Value',
    addAriaLabel = 'Increase Value',
    onChange = () => {},
  } = props;

  return (
    <Styles.Wrapper>
      <Styles.Button
        className="remove-button"
        aria-label={removeAriaLabel}
        onClick={() => setValue(value - 1)}
      >
        <Icon icon="remove" fill={info} />
      </Styles.Button>
      <Styles.Input
        type="text"
        pattern="(10|([0-9]?))"
        minLength={1}
        maxLength={2}
        value={value}
        onChange={onChange}
      />
      <Styles.Button
        className="add-button"
        aria-label={addAriaLabel}
        onClick={() => setValue(value + 1)}
      >
        <Icon icon="add" fill={info} />
      </Styles.Button>
    </Styles.Wrapper>
  );
};

export default NumberInputSpinner;
