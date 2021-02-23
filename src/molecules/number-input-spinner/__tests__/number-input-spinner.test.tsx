import React from 'react';
import { render } from '@testing-library/react';
import { NumberInputSpinner } from '../../..';

describe('NumberInputSpinner', () => {
  it('renders', () => {
    const { asFragment } = render(
      <NumberInputSpinner
        decreaseAriaLabel="Decrease Value"
        increaseAriaLabel="Increase Value"
        increment={1}
        min={0}
        max={10}
        value={5}
        onChange={() => {}}
        disabled={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
