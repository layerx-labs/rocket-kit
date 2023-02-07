import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from '../../..';

describe('Label', () => {
  it('renders', () => {
    const { asFragment } = render(<Label value={'Amount'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const fieldText = 'Savings';
    render(<Label value={fieldText} />);
    screen.getByText(fieldText);
  });

  it('has correct value with TKAI', () => {
    const fieldText = 'Savings';
    render(<Label value={fieldText} currency="tkai" />);
    screen.getByText(fieldText);
  });
});
