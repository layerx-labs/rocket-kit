import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tag } from '../../..';

describe('Tag', () => {
  it('renders', () => {
    const { asFragment } = render(<Tag color={'danger'} value={'hello'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', async () => {
    const tagValue = 'This is my tag';
    render(<Tag color={'danger'} value={tagValue} />);
    await screen.getByText(tagValue);
  });
});
