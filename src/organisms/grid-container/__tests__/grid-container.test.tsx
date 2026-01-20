import React from 'react';
import { render } from '@testing-library/react';
import { GridContainer, GridRow, GridCol } from '../../..';

describe('GridContainer', () => {
  it('renders', () => {
    const { asFragment } = render(
      <GridContainer>
        <GridRow>
          <GridCol>Col 1</GridCol>
          <GridCol>Col 2</GridCol>
          <GridCol size={2}>Col 3</GridCol>
        </GridRow>
        <GridRow>
          <GridCol>Col 1</GridCol>
          <GridCol>Col 2</GridCol>
        </GridRow>
      </GridContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
