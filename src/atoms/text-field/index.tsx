import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { ErrorField } from '../..';
import styles from './styles.module.css';
import { TextFieldType } from './types';
import icons from '../../ions/icons';

export interface TextFieldProps {
  type?: TextFieldType;
  error?: string;
  icon?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
  style?: CSSProperties;
  min?: number;
  max?: number;
  pattern?: string;
  required?: boolean;
}

const TextField = (props: TextFieldProps) => {
  const {
    type = 'text',
    icon,
    name,
    value,
    defaultValue,
    onChange = () => {},
    placeholder = '',
    min,
    max,
    disabled = false,
    error,
    dataTestId,
    className = 'text-field',
    style,
    pattern,
    required = false,
  } = props;

  // Generate SVG data URLs for icon
  const getIconDataUrl = (iconName: string, fillColor: string) => {
    const iconPath = icons[iconName];
    if (!iconPath) return undefined;
    const encodedPath = JSON.stringify(iconPath);
    return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewbox="0 0 32 32"><path style="fill:${fillColor}" d=${encodedPath} /></svg>')`;
  };

  const cssVars = icon
    ? {
        '--textFieldIcon': getIconDataUrl(
          icon,
          error ? 'rgb(235,87,87)' : 'rgb(217,212,237)'
        ),
        '--textFieldIconFocus': getIconDataUrl(icon, 'rgb(67,41,166)'),
        ...style,
      }
    : { ...style };

  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        disabled={disabled}
        data-testid={dataTestId}
        className={clsx(
          styles.textField,
          className,
          error && styles.hasError,
          icon && styles.hasIcon
        )}
        style={cssVars as CSSProperties & Record<string, string | undefined>}
        pattern={pattern}
        required={required}
      />
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default TextField;
