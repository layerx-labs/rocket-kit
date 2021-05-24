import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Select } from '../../..';

describe('Select Default', () => {
  const options = [
    { value: 'option_1', name: 'Option 1' },
    { value: 'option_2', name: 'Option 2' },
    { value: 'option_3', name: 'Option 3' },
  ];

  it('renders', () => {
    const { asFragment } = render(<Select name="title" options={options} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
