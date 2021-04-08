import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TextFieldAppendix } from '../../..';

describe('TextField Appendix', () => {
  it('renders', () => {
    const { asFragment } = render(
      <TextFieldAppendix prepend="appendix" value="this is my text" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const appendValue = 'appendix';
    const textValue = 'this is my text';
    render(
      <TextFieldAppendix type="text" append={appendValue} value={textValue} />
    );
    screen.getByText(appendValue);
  });
});
