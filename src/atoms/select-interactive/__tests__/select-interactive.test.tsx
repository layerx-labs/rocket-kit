import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import { SelectInteractive } from '../../..';

describe('Select Interactive', () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'cookies', label: 'Cookies and Cream' },
    { value: 'oreo', label: 'Oreo' },
  ];

  it('renders', () => {
    const { asFragment } = render(
      <SelectInteractive
        multi={false}
        search={true}
        placeholder="Awesome Select Component"
        value={options[2]}
        options={options}
        onChange={() => {}}
        onInputChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
