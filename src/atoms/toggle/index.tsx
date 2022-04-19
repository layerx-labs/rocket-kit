import React, { useState } from 'react';

import * as Styles from './styles';
import { ToggleProps } from './types';

const Toggle = ({
  isLabelVisible = false,
  disabled = false,
  checked = false,
  labelLeft = 'Off',
  labelRight = 'On',
  onClick = () => {},
  ...rest
}: ToggleProps) => {
  // tracks the active state so it's easier to test
  const [state, setState] = useState(checked);

  const handleClick = (value: boolean) => {
    if (disabled) return;

    setState(value);
    return onClick(value);
  };

  return (
    <Styles.Switcher
      disabled={disabled}
      role="radiogroup"
      aria-label="toggle switcher"
    >
      <div {...rest}>
        {labelLeft && isLabelVisible && (
          <label htmlFor="switch-off">{labelLeft}</label>
        )}

        <span className="wrapper">
          <input
            type="radio"
            name="theme"
            id="switch-off"
            disabled={disabled}
            aria-checked={!state}
            defaultChecked={!checked}
            onClick={() => handleClick(false)}
          />
          <input
            type="radio"
            name="theme"
            id="switch-on"
            disabled={disabled}
            aria-checked={state}
            defaultChecked={checked}
            onClick={() => handleClick(true)}
          />
          <span aria-hidden="true" className="bg" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            aria-hidden="true"
            className="switcher"
            htmlFor={`switch-${state ? 'off' : 'on'}`}
          />
        </span>

        {labelRight && isLabelVisible && (
          <label htmlFor="switch-on">{labelRight}</label>
        )}
      </div>
    </Styles.Switcher>
  );
};

export default Toggle;
