import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../../..';

describe('ProgressBar', () => {
  it('renders', () => {
    const { asFragment } = render(<ProgressBar progress={10} value="10%" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const progressText = '10%';
    render(<ProgressBar progress={10} value={progressText} />);
    screen.getByText(progressText);
  });
});
