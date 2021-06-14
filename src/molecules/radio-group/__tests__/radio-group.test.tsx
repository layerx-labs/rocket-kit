import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { RadioGroup } from '../../..';

const radioButtons = [
  { value: 'option_1', label: 'Option 1', disabled: false, checked: undefined },
  { value: 'option_2', label: 'Option 2', disabled: false, checked: undefined },
];

describe('Checkbox', () => {
  it('renders', () => {
    const { asFragment } = render(
      <RadioGroup group="test-group" options={radioButtons} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
