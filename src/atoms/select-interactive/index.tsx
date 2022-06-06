import React from 'react';
import Select, { components } from 'react-select';

import Icon from '../icon';
import ErrorField from '../error-field';
import * as Styles from './styles';

interface OptionProps {
  data: {
    value: string;
    label: string;
    icon: string;
    customImage: React.ReactNode;
  };
}

const SelectInteractive = (props: any) => {
  const {
    name,
    multi = false,
    search = true,
    placeholder,
    options,
    value,
    clear = true,
    onChange = () => {},
    onInputChange = () => {},
    error,
    disabled = false,
    dataTestId,
  } = props;

  const { Option } = components;

  const CustomSelectOption = (props: OptionProps, commonProps: any) => (
    <Option {...props} {...commonProps}>
      {props.data.icon ? (
        <Icon icon={props.data.icon} />
      ) : props.data.customImage ? (
        props.data.customImage
      ) : null}
      {props.data.label}
    </Option>
  );

  const CustomSelectValue = (props: OptionProps) => (
    <div>
      {props.data.icon ? (
        <Icon icon={props.data.icon} />
      ) : props.data.customImage ? (
        props.data.customImage
      ) : null}
      {props.data.label}
    </div>
  );

  return (
    <Styles.SelectWrapper data-testid={dataTestId}>
      {/* @ts-ignore */}
      <Select
        className="select-interactive"
        classNamePrefix="select"
        name={name}
        isMulti={multi}
        isSearchable={search}
        isDisabled={disabled}
        placeholder={placeholder}
        options={options}
        value={value}
        isClearable={clear}
        onChange={onChange}
        defaultMenuIsOpen={false}
        onInputChange={onInputChange}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue,
        }}
      />
      {error ? <ErrorField error={error} /> : null}
    </Styles.SelectWrapper>
  );
};

export default SelectInteractive;
