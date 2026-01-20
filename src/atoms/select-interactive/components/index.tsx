import React from 'react';
import Icon from '../../icon';
import Tag from '../../tag';
import { components } from 'react-select';
import { TCustomOptions, TSelectInteractiveOption } from '../types';
import styles from '../styles.module.css';

export interface GroupBase {
  options: readonly TSelectInteractiveOption[];
  label?: string;
}

const { Option } = components;

export const FormatGroupLabel = (props: GroupBase) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className={styles.selectGroupLabel}>
        {props.label}
      </span>
      <Tag value={`${props.options.length}`} />
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
  <div className={styles.singleValue}>
    {props.data.icon ? (
      <Icon icon={props.data.icon} />
    ) : props.data.customImage ? (
      <img src={props.data.customImage} alt={props.data.label} />
    ) : null}
    {props.data.label}
  </div>
);
