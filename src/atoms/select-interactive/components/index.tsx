import React from 'react';
import Icon from '../../icon';
import Tag from '../../tag';
import { components } from 'react-select';
import { TCustomOptions, TOptions } from '../types';
import { formatGroupLabel } from 'react-select/src/builtins';
import * as Styles from '../styles';

const { Option } = components;

export const FormatGroupLabel: formatGroupLabel<TOptions> = ({
  label,
  options,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Styles.SelectGroupLabel className="selective-options-group-label">
        {label}
      </Styles.SelectGroupLabel>
      <Tag value={`${options?.length}`} />
    </div>
  );
};

export const CustomSelectOption = (props: TCustomOptions, commonProps: any) => (
  <Option {...props} {...commonProps}>
    {props.data.icon ? (
      <Icon icon={props.data.icon} />
    ) : props.data.customImage ? (
      <img src={props.data.customImage} alt={props.data.label} />
    ) : null}
    {props.data.label}
  </Option>
);

export const CustomSelectValue = (props: TCustomOptions) => (
  <div>
    {props.data.icon ? (
      <Icon icon={props.data.icon} />
    ) : props.data.customImage ? (
      <img src={props.data.customImage} alt={props.data.label} />
    ) : null}
    {props.data.label}
  </div>
);
