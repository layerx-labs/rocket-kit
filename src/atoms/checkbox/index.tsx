import React, { CSSProperties } from 'react';
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  Checkmark,
} from './styles';

interface Props {
  value: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  onChange?: () => {};
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
}

const Checkbox = (props: Props) => {
  const {
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
        defaultChecked={checked}
        aria-checked={checked}
        onChange={onChange}
        error={error}
        disabled={disabled}
        data-testid={dataTestId}
        required={required}
      />
      <Checkmark />
    </CheckboxWrapper>
  );
};

export default Checkbox;
