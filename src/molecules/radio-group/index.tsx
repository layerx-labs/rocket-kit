import React from 'react';
import ErrorField from '../../atoms/error-field';
import * as Styles from './styles';

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
      <Styles.Wrapper
        type={type}
        group={group}
        error={error}
        data-testid={dataTestId}
      >
        {options.map((value, index) => (
          <Styles.Item key={index} disabled={value.disabled || disabled}>
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
          </Styles.Item>
        ))}
      </Styles.Wrapper>
      {error ? <ErrorField error={error} /> : null}
    </div>
  );
};

export default RadioGroup;
