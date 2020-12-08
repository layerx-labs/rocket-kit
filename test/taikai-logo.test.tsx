import React from 'react';
import { render } from '@testing-library/react';
import { TaikaiLogo } from '../src/index';

describe('Taikai Logo', () => {
  it('renders', () => {
    const { asFragment } = render(<TaikaiLogo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
