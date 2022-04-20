import React, { useEffect, useState } from 'react';

import * as Styles from './styles';
import { ToggleProps } from './types';
import { v4 } from 'uuid';

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

  return (
    <Styles.Switcher
      disabled={disabled}
      role="radiogroup"
      aria-label="toggle switcher"
    >
      <div {...rest}>
        {labelLeft && isLabelVisible && (
          <label htmlFor={`${id}-switch-off`}>{labelLeft}</label>
        )}

        <span className="wrapper">
          <input
            type="radio"
            name={`toggle-id-${id}`}
            id={`${id}-switch-off`}
            className="switch-off"
            disabled={disabled}
            aria-checked={!state}
            defaultChecked={!checked}
            onClick={() => handleClick(false)}
          />
          <input
            type="radio"
            name={`toggle-id-${id}`}
            className="switch-on"
            id={`${id}-switch-on`}
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
