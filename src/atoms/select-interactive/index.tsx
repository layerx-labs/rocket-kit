import React from 'react';
import Select from 'react-select';

import ErrorField from '../error-field';
import {
  CustomSelectOption,
  CustomSelectValue,
  FormatGroupLabel,
} from './components';
import * as Styles from './styles';
import { SelectInteractiveProps, TSelectInteractiveOption } from './types';

const SelectInteractive = <T extends TSelectInteractiveOption>({
  name,
  multi = false,
  search = true,
  placeholder,
  options,
  value,
  clear = true,
  error,
  disabled = false,
  formatGroupLabel,
  onChange = () => {},
  onInputChange = () => {},
}: SelectInteractiveProps<T>) => {
  return (
    <Styles.SelectWrapper>
      <Select
        name={name}
        value={value}
        isMulti={multi}
        options={options}
        isClearable={clear}
        isDisabled={disabled}
        isSearchable={search}
        classNamePrefix="select"
        placeholder={placeholder}
        className="select-interactive"
        onChange={() => onChange}
        defaultMenuIsOpen={false}
        onInputChange={onInputChange}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue,
        }}
        formatGroupLabel={s =>
          formatGroupLabel ? FormatGroupLabel?.(s) : undefined
        }
      />
      {error ? <ErrorField error={error} /> : null}
    </Styles.SelectWrapper>
  );
};

export default SelectInteractive;
