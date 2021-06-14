import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { PaginationControl } from '../../..';

describe('PaginationControl', () => {
  it('renders', () => {
    const { asFragment } = render(
      <PaginationControl page={0} pageCount={10} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
