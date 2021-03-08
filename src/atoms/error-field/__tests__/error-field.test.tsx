import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ErrorField } from '../../..';

describe('ErrorField', () => {
  it('renders', () => {
    const { asFragment } = render(<ErrorField error={'operation failed.'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct error text', () => {
    const fieldText = 'Failed to save name';
    render(<ErrorField error={fieldText} color="danger" />);
    screen.getByText(fieldText);
  });

  it('has correct success text', () => {
    const fieldText = 'Name save!';
    render(<ErrorField error={fieldText} color="success" />);
    screen.getByText(fieldText);
  });
});
