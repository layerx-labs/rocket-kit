import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Error } from '../../..';

describe('Error', () => {
  it('renders', () => {
    const { asFragment } = render(<Error value="This is an awesome error" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'This is an awesome error';
    render(<Error value={textValue} />);
    screen.queryByText(textValue);
  });

  it('has minimal variant', () => {
    const variant = 'minimal';
    const textValue = 'This is an awesome error';
    render(<Error variant={variant} value={textValue} />);
    screen.queryByText(variant);
  });
});
