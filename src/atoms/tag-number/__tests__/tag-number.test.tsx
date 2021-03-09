import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TagNumber } from '../../..';

describe('Tag Number', () => {
  it('renders', () => {
    const { asFragment } = render(<TagNumber label={'Example'} value={10} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const tagLabel = 'Tag Example';
    const tagValue = 10;
    render(<TagNumber label={tagLabel} value={tagValue} />);
    screen.getByText(tagLabel);
  });
});
