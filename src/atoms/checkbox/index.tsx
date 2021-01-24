import React, { HTMLAttributes } from 'react';
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  Checkmark,
} from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label?: string;
  checked?: boolean;
  onChange?: () => {};
  error?: string;
  disabled?: boolean;
}

const Checkbox = (props: Props) => {
  const {
    label,
    value,
    checked = false,
    onChange = () => {},
    error,
    disabled = false,
    style,
    className = 'checkbox',
  } = props;

  return (
    <CheckboxWrapper
      style={style}
      className={className}
      error={error}
      disabled={disabled}
    >
      <CheckboxLabel>{label}</CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        name={value}
        checked={checked}
        onChange={onChange}
        error={error}
        disabled={disabled}
      />
      <Checkmark />
    </CheckboxWrapper>
  );
};

export default Checkbox;
