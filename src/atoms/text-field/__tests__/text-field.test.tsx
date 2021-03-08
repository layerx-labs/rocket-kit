import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TextField } from '../../..';

describe('TextField', () => {
  it('renders', () => {
    const { asFragment } = render(
      <TextField type="text" value="this is my text" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'this is my text';
    render(<TextField type="text" value={textValue} />);
    const foundInput = screen.getByDisplayValue(textValue);
    expect(foundInput).toHaveValue(textValue);
  });

  it('has empty value', () => {
    render(<TextField type="text" />);
    const foundInput = screen.getByRole('textbox');
    expect(foundInput).toHaveValue('');
  });

  it('has correct placeholder', () => {
    const placeholderValue = 'this is my placeholder';
    render(<TextField type="text" placeholder={placeholderValue} />);
    const foundInput = screen.getByPlaceholderText(placeholderValue);
    expect(foundInput).toHaveProperty('placeholder', placeholderValue);
  });

  it('has empty placeholder', () => {
    render(<TextField type="text" />);
    const foundInput = screen.getByRole('textbox');
    expect(foundInput).toHaveProperty('placeholder', '');
  });

  it('has correct value after typing', () => {
    const textValue = 'this is my text';
    render(<TextField type="text" />);
    const foundInput = screen.getByRole('textbox');
    userEvent.type(foundInput, textValue);
    expect(foundInput).toHaveValue(textValue);
  });

  it('has correct date value', () => {
    const dateValue = '2021-01-19';
    render(<TextField type="date" value={dateValue} />);
    const foundInput = screen.getByDisplayValue(dateValue);
    expect(foundInput).toHaveValue(dateValue);
  });
});
