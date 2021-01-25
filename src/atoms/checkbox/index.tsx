import React, { CSSProperties } from 'react';
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  Checkmark,
} from './styles';

interface Props {
  value: string;
  label?: string;
  checked?: boolean;
  onChange?: () => {};
  error?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Checkbox = (props: Props) => {
  const {
    label,
    value,
    checked = false,
    onChange = () => {},
    error,
    disabled = false,
    className = 'checkbox',
    style,
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
