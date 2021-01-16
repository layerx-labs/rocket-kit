import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tag } from '../src';

describe('Tag', () => {
  it('renders', () => {
    const { asFragment } = render(<Tag color={'danger'} value={'hello'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Tag has correct value', async () => {
    const tagValue = 'This is my tag';
    render(<Tag color={'danger'} value={tagValue} />);

    const foundText = await screen.getByText(tagValue);
    expect(foundText).toBeTruthy();
  });
});
