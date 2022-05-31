import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ErrorField from '../error-field';
import Icon from '../icon';
import * as Styles from './styles';

export interface FilePickerProps {
  minimal: boolean;
  name: string;
  accept: string;
  multiple: boolean;
  placeholder: string;
  pluralText: string;
  error: string;
  dataTestId: string;
  onChange: PropTypes.func;
  value: string;
  buttonText: string;
  disabled: boolean;
}

const FilePicker = (props: FilePickerProps) => {
  const {
    minimal = false,
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

  const getUploadedFileName = e => {
    let files = e.target.files,
      value = e.target.value,
      fileName;
    if (files && files.length > 1) fileName = `${files.length} ${pluralText}`;
    else fileName = value.split('\\').pop();
    if (fileName) setFileName(fileName);
  };

  return (
    <Styles.Wrapper disabled={disabled} minimal={minimal} error={error}>
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
        data-testid={dataTestId || null}
      />

      <label htmlFor={name} error={error}>
        <span className="file-name">{fileName}</span>
        <span className="button">
          <Icon icon="upload" />
          {buttonText}
        </span>
      </label>
      {error ? <ErrorField error={error} /> : null}
    </Styles.Wrapper>
  );
};

export default FilePicker;
