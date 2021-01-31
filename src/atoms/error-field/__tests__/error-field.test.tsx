import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorField } from '../../..';

describe('ErrorField', () => {
  it('renders', () => {
    const { asFragment } = render(<ErrorField error={'operation failed.'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct error text', async () => {
    const fieldText = 'Failed to save name';
    render(<ErrorField error={fieldText} color="danger" />);
    await screen.getByText(fieldText);
  });

  it('has correct success text', async () => {
    const fieldText = 'Name save!';
    render(<ErrorField error={fieldText} color="success" />);
    await screen.getByText(fieldText);
  });
});
