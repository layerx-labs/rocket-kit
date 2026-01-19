import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextArea } from '../../..';

describe('TextArea', () => {
  it('renders', () => {
    const { asFragment } = render(<TextArea value="this is my text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'this is my text';
    render(<TextArea value={textValue} />);
    const foundInput = screen.getByDisplayValue(textValue);
    expect(foundInput).toHaveValue(textValue);
  });

  it('has empty value', () => {
    render(<TextArea />);
    const foundInput = screen.getByRole('textbox');
    expect(foundInput).toHaveValue('');
  });

  it('has correct placeholder', () => {
    const placeholderValue = 'this is my placeholder';
    render(<TextArea placeholder={placeholderValue} />);
    const foundInput = screen.getByPlaceholderText(placeholderValue);
    expect(foundInput).toHaveProperty('placeholder', placeholderValue);
  });

  it('has empty placeholder', () => {
    render(<TextArea />);
    const foundInput = screen.getByRole('textbox');
    expect(foundInput).toHaveProperty('placeholder', '');
  });
});
