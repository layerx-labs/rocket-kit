import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckboxGroup } from '../../..';

const checkboxButtons = [
  { label: 'Option 1', value: 'option_1', checked: false, disabled: false },
  { label: 'Option 2', value: 'option_2', checked: false, disabled: false },
];

describe('CheckboxGroup', () => {
  it('renders', () => {
    const { asFragment } = render(<CheckboxGroup options={checkboxButtons} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
