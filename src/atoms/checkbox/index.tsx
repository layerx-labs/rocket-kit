import React, { CSSProperties, useMemo, useRef, useState } from 'react';
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  Checkmark,
} from './styles';

interface Props {
  value: string;
  label?: string | React.ReactNode;
  checked?: boolean | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
}

const Checkbox = ({
  label,
  value,
  checked = false,
  onChange = () => {},
  error = false,
  disabled = false,
  className = 'checkbox',
  style,
  dataTestId,
  required = false,
}: Props) => {
  const checkedRef = useRef<boolean>(checked);
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(prev => !prev);
    onChange(event);
  };

  const checkmarkClassName = useMemo(() => {
    let isCheckStr = '';
    let isDisabledStr = '';

    // if they are different
    // use the value coming from the props
    // as it is the source of truth
    if (checked !== checkedRef.current) {
      setIsChecked(checked);
      checkedRef.current = checked;
      isCheckStr = checked ? 'checked' : 'not-checked';
    } else if (isChecked) isCheckStr = 'checked';
    else isCheckStr = 'not-checked';

    if (disabled) isDisabledStr = 'disabled';
    else isDisabledStr = 'not-disabled';

    return `${isCheckStr} ${isDisabledStr}`;
  }, [checked, isChecked, disabled]);

  return (
    <CheckboxWrapper
      style={style}
      className={className}
      error={error}
      disabled={disabled}
    >
      <CheckboxLabel data-testid={dataTestId?.concat('-label')}>
        {label}
      </CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        name={value}
        defaultChecked={isChecked}
        aria-checked={isChecked}
        onChange={handleOnChange}
        error={error}
        disabled={disabled}
        data-testid={dataTestId}
        required={required}
      />
      <Checkmark
        data-testid={dataTestId?.concat('-mark')}
        className={checkmarkClassName}
        error={error}
      />
    </CheckboxWrapper>
  );
};

export default Checkbox;
