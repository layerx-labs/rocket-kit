import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { FilePicker } from '../../..';

describe('FilePicker', () => {
  it('renders', () => {
    const { asFragment } = render(
      <FilePicker name="file" onChange={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
