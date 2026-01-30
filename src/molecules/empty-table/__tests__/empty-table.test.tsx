import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EmptyTable } from '../../..';

describe('Empty Table', () => {
  it('renders', () => {
    const { asFragment } = render(
      <EmptyTable
        border
        tableHead={['Column 1', 'Column 2', 'Column 3', 'Column 4']}
        value="No data"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all columns', () => {
    render(
      <EmptyTable
        border
        tableHead={['Column 1', 'Column 2', 'Column 3', 'Column 4']}
        value="No data"
      />
    );
    for (let row = 1; row < 4; ++row) {
      screen.getByText(`Column ${row}`);
    }

    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});
