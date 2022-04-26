import React, { useEffect, useState } from 'react';

import * as Styles from './styles';
import { ToggleProps } from './types';
import { v4 } from 'uuid';

const Toggle = ({
  ariaLabelOn,
  ariaLabelOff,
  labelLeft = 'Off',
  labelRight = 'On',
  checked = false,
  disabled = false,
  isLabelVisible = false,
  onClick = () => {},
  ...rest
}: ToggleProps) => {
  // tracks the active state so it's easier to test
  const [state, setState] = useState(checked);
  const [id, setId] = useState('');

  const handleClick = (value: boolean) => {
    if (disabled) return;

    setState(value);
    return onClick(value);
  };

  useEffect(() => {
    // If the ID stays outside the component
    // it will be the same if we instantiate
    // thousands components.
    // And if it stays inside the component
    // it will rerun everytime causing memory leak
    // So, this will enforce a unique id,
    // without any re-renders
    const id = v4().split('', 5).join('');
    setId(id);
  }, []);

  useEffect(() => {
    setState(checked);
  }, [checked]);

  return (
    <Styles.Switcher
      disabled={disabled}
      role="radiogroup"
      aria-label="toggle switcher"
      {...rest}
    >
      <div>
        {labelLeft && isLabelVisible && (
          <label htmlFor={`${id}-switch-off`}>{labelLeft}</label>
        )}

        <span className="wrapper">
          <input
            type="radio"
            name={`toggle-id-${id}`}
            id={`${id}-switch-off`}
            className="switch-off"
            checked={!state}
            disabled={disabled}
            aria-checked={!state}
            aria-label={ariaLabelOff}
            onChange={() => handleClick(false)}
          />
          <input
            type="radio"
            name={`toggle-id-${id}`}
            className="switch-on"
            id={`${id}-switch-on`}
            checked={state}
            disabled={disabled}
            aria-checked={state}
            aria-label={ariaLabelOn}
            onChange={() => handleClick(true)}
          />
          <span aria-hidden="true" className="bg" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            aria-hidden="true"
            className="switcher"
            htmlFor={`${id}-switch-${state ? 'off' : 'on'}`}
          />
        </span>

        {labelRight && isLabelVisible && (
          <label htmlFor={`${id}-switch-on`}>{labelRight}</label>
        )}
      </div>
    </Styles.Switcher>
  );
};

export default Toggle;
