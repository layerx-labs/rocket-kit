import { components } from 'react-select';

import React from 'react';
import Icon from '../../icon';
import { TCustomOptions, TOptions } from '../types';
import { formatGroupLabel } from 'react-select/src/builtins';

import * as Styles from '../styles';

const { Option } = components;

export const FormatGroupLabel: formatGroupLabel<TOptions> = ({
  label,
  options,
}) => {
  // These styles are only working when hard coded
  return (
    <Styles.SelectGroup
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Styles.SelectGroupLabel className="selective-options-group-label">
        {label}
      </Styles.SelectGroupLabel>

      <Styles.SelectGroupTotal
        className="selective-options-group-total"
        style={{
          minWidth: 1,
          fontSize: 12,
          lineHeight: '1',
          borderRadius: '2em',
          textAlign: 'center',
          fontWeight: 'normal',
          display: 'inline-block',
          padding: '0.16666666666667em 0.5em',
        }}
      >
        {options?.length}
      </Styles.SelectGroupTotal>
    </Styles.SelectGroup>
  );
};

export const CustomSelectOption = (props: TCustomOptions, commonProps: any) => (
  <Option {...props} {...commonProps}>
    {props.data.icon ? (
      <Icon icon={props.data.icon} />
    ) : props.data.customImage ? (
      props.data.customImage
    ) : null}
    {props.data.label}
  </Option>
);

export const CustomSelectValue = (props: TCustomOptions) => (
  <div>
    {props.data.icon ? (
      <Icon icon={props.data.icon} />
    ) : props.data.customImage ? (
      props.data.customImage
    ) : null}
    {props.data.label}
  </div>
);
