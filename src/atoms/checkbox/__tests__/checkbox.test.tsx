import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../../..';

describe('Checkbox', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Checkbox value={'check'} label={'hello'} checked={true} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
