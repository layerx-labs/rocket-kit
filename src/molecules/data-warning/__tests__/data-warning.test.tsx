import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { DataWarning } from '../../..';

describe('DataWarning', () => {
  it('renders', () => {
    const { asFragment } = render(
      <DataWarning type="login">
        <span>this is my warning text</span>
      </DataWarning>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'this is my warning text';
    render(
      <DataWarning type="login">
        <span>{textValue}</span>
      </DataWarning>
    );
    screen.queryByText(textValue);
  });
});
