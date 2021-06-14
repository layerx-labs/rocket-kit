import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { LoadingState } from '../../..';

describe('LoadingState', () => {
  it('renders', () => {
    const { asFragment } = render(<LoadingState type="text" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
