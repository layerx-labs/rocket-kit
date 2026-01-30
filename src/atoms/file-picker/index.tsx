import React, { useState } from 'react';
import clsx from 'clsx';
import ErrorField from '../error-field';
import Icon from '../icon';
import styles from './styles.module.css';

export interface FilePickerProps {
  name: string;
  accept?: string;
  multiple?: boolean;
  placeholder?: string;
  pluralText?: string;
  error?: string;
  dataTestId?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  buttonText?: string;
  disabled?: boolean;
}

const FilePicker = (props: FilePickerProps) => {
  const {
    name,
    accept,
    multiple = false,
    placeholder = 'Select file',
    pluralText = 'files selected',
    error,
    dataTestId,
    onChange = () => {},
    value = '',
    buttonText = 'Browse',
    disabled = false,
  } = props;

  const [fileName, setFileName] = useState(value ? value : placeholder);

  const getUploadedFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files,
      value = e.target.value,
      fileName;
    if (files && files.length > 1) fileName = `${files.length} ${pluralText}`;
    else fileName = value.split('\\').pop();
    if (fileName) setFileName(fileName);
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        error && styles.hasError,
        disabled && styles.isDisabled
      )}
    >
      <input
        id={name}
        type="file"
        accept={accept}
        multiple={multiple}
        data-multiple-caption={fileName}
        onChange={evt => {
          getUploadedFileName(evt);
          onChange(evt);
        }}
        data-testid={dataTestId}
      />

      <label htmlFor={name}>
        <span className="file-name">{fileName}</span>
        <span className="button">
          <Icon icon="upload" />
          {buttonText}
        </span>
      </label>
      {error && <ErrorField error={error} />}
    </div>
  );
};

export default FilePicker;
