import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from '../../..';

describe('Label', () => {
  it('renders', () => {
    const { asFragment } = render(<Label value={'Amount'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', async () => {
    const fieldText = 'Savings';
    render(<Label value={fieldText} />);
    await screen.getByText(fieldText);
  });

  it('has correct value with KAI', async () => {
    const fieldText = 'Savings';
    render(<Label value={fieldText} kai />);
    await screen.getByText(fieldText);
  });
});
