import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Tag } from '../../..';

describe('Tag', () => {
  it('renders', () => {
    const { asFragment } = render(<Tag color={'red500'} value={'hello'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const tagValue = 'This is my tag';
    render(<Tag color={'red500'} value={tagValue} />);
    screen.getByText(tagValue);
  });
});
