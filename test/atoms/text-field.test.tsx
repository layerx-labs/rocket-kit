import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextField } from '../../src';
import userEvent from '@testing-library/user-event';

describe('TextField', () => {
  it('renders', () => {
    const { asFragment } = render(
      <TextField type="text" value="this is my text" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('TextField has correct value', async () => {
    const textValue = 'this is my text';
    render(<TextField type="text" value={textValue} />);
    const foundInput = screen.getByDisplayValue(textValue);
    expect(foundInput).toHaveProperty('value', textValue);
  });

  it('TextField has empty value', async () => {
    render(<TextField type="text" />);
    const foundInput = screen.getByRole('textbox');
    expect(foundInput).toHaveProperty('value', '');
  });

  it('TextField has correct placeholder', async () => {
    const placeholderValue = 'this is my placeholder';
    render(<TextField type="text" placeholder={placeholderValue} />);
    const foundInput = screen.getByPlaceholderText(placeholderValue);
    expect(foundInput).toHaveProperty('placeholder', placeholderValue);
  });

  it('TextField has empty placeholder', async () => {
    render(<TextField type="text" />);
    const foundInput = screen.getByRole('textbox');
    expect(foundInput).toHaveProperty('placeholder', '');
  });

  it('TextField has correct value after typing', async () => {
    const textValue = 'this is my text';
    render(<TextField type="text" />);
    const foundInput = screen.getByRole('textbox');
    userEvent.type(foundInput, textValue);
    expect(foundInput).toHaveProperty('value', textValue);
  });

  it('TextField Date has correct value', async () => {
    const dateValue = '2021-01-19';
    render(<TextField type="date" value={dateValue} />);
    const foundInput = screen.getByDisplayValue(dateValue);
    expect(foundInput).toHaveProperty('value', dateValue);
  });
});
