import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormGroup, TextField } from '../../..';

describe('FormGroup', () => {
  it('renders', () => {
    const { asFragment } = render(
      <FormGroup label="label" kai={false}>
        <TextField type="text" value="this is my text" />
      </FormGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'this is my text';
    render(
      <FormGroup label="label" kai={false}>
        <TextField type="text" value={textValue} />
      </FormGroup>
    );
    const foundInput = screen.getByDisplayValue(textValue);
    expect(foundInput).toHaveValue(textValue);
  });
});