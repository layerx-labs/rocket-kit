import React, { useState } from 'react';
import ErrorField from '../error-field';
import Icon from '../icon';
import * as Styles from './styles';

export interface FilePickerProps {
  minimal?: boolean;
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

  const getUploadedFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files,
      value = e.target.value,
      fileName;
    if (files && files.length > 1) fileName = `${files.length} ${pluralText}`;
    else fileName = value.split('\\').pop();
    if (fileName) setFileName(fileName);
  };

  return (
    <Styles.Wrapper disabled={disabled} minimal={minimal} error={!!error}>
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
    </Styles.Wrapper>
  );
};

export default FilePicker;
