import React, { CSSProperties } from 'react';
import ErrorField from '../error-field';
import * as Styles from './styles';

export interface SelectProps {
  minimal?: boolean;
  placeholder?: string;
  options: any;
  defaultValue?: string | number;
  value?: string | number;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  dataTestId?: string;
  className?: string;
  style?: CSSProperties;
}

const Select = (props: SelectProps) => {
  const {
    minimal = false,
    placeholder,
    options,
    defaultValue,
    value,
    name,
    onChange = () => {},
    error,
    disabled = false,
    dataTestId,
  } = props;

  const selectOptions = options.map(
    (value: { value: string; name: string }) => (
      <option key={value.value} value={value.value}>
        {value.name}
      </option>
    )
  );

  return (
    <>
      <Styles.SelectStyle
        minimal={minimal}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        data-testid={dataTestId}
      >
        {placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {selectOptions}
      </Styles.SelectStyle>
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default Select;
