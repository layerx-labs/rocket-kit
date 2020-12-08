import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Checkbox value={'check'} label={'ola'} checked={true} />
    );
    screen.logTestingPlaygroundURL();
    expect(asFragment()).toMatchSnapshot();
  });
});
