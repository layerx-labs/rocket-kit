import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorField } from '../../src';

describe('ErrorField', () => {
  it('renders', () => {
    const { asFragment } = render(<ErrorField error={'operation failed.'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ErrorField error has correct text', async () => {
    const fieldText = 'Failed to save name';
    render(<ErrorField error={fieldText} color="danger" />);
    const foundText = await screen.getByText(fieldText);
    expect(foundText).toBeTruthy();
  });

  it('ErrorField success has correct text', async () => {
    const fieldText = 'Name save!';
    render(<ErrorField error={fieldText} color="success" />);
    const foundText = await screen.getByText(fieldText);
    expect(foundText).toBeTruthy();
  });
});
