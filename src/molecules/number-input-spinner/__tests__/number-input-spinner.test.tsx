import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NumberInputSpinner } from '../../..';

describe('NumberInputSpinner', () => {
  it('renders', () => {
    const { asFragment } = render(
      <NumberInputSpinner
        decreaseAriaLabel="Decrease Value"
        increaseAriaLabel="Increase Value"
        increment={1}
        min={0}
        max={10}
        value={5}
        onChange={() => {}}
        disabled={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('decrease button is disabled when min is reached', () => {
    render(
      <NumberInputSpinner
        increment={2}
        min={0}
        max={10}
        value={0}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /decrease value/i,
    });
    expect(decreaseButton).toBeDisabled();
  });
  it('increase button is disabled when max is reached', () => {
    render(
      <NumberInputSpinner
        increment={2}
        min={0}
        max={10}
        value={10}
        onChange={() => {}}
        disabled={false}
      />
    );
    const increaseButton = screen.getByRole('button', {
      name: /increase value/i,
    });
    expect(increaseButton).toBeDisabled();
  });
  it('decreases by 1', () => {
    render(
      <NumberInputSpinner
        increment={1}
        min={0}
        max={10}
        value={1}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /decrease value/i,
    });
    userEvent.click(decreaseButton);
    const spinInput = screen.getByRole('spinbutton');
    expect(spinInput).toHaveValue(0);
  });
  it('increases by 1', () => {
    render(
      <NumberInputSpinner
        increment={1}
        min={0}
        max={10}
        value={9}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /increase value/i,
    });
    userEvent.click(decreaseButton);
    const spinInput = screen.getByRole('spinbutton');
    expect(spinInput).toHaveValue(10);
  });
  it('does not cross minimum limit when value is decreased by 2', () => {
    render(
      <NumberInputSpinner
        increment={2}
        min={0}
        max={10}
        value={1}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /decrease value/i,
    });
    userEvent.click(decreaseButton);
    const spinInput = screen.getByRole('spinbutton');
    expect(spinInput).toHaveValue(0);
  });
  it('does not cross maximum limit when value is increased by 2', () => {
    render(
      <NumberInputSpinner
        increment={2}
        min={0}
        max={10}
        value={9}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /increase value/i,
    });
    userEvent.click(decreaseButton);
    const spinInput = screen.getByRole('spinbutton');
    expect(spinInput).toHaveValue(10);
  });
  it('does not cross minimum limit when value is decreased by 3', () => {
    render(
      <NumberInputSpinner
        increment={3}
        min={0}
        max={10}
        value={2}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /decrease value/i,
    });
    userEvent.click(decreaseButton);
    const spinInput = screen.getByRole('spinbutton');
    expect(spinInput).toHaveValue(0);
  });
  it('does not cross maximum limit when value is increased by 3', () => {
    render(
      <NumberInputSpinner
        increment={3}
        min={0}
        max={10}
        value={8}
        onChange={() => {}}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /increase value/i,
    });
    userEvent.click(decreaseButton);
    const spinInput = screen.getByRole('spinbutton');
    expect(spinInput).toHaveValue(10);
  });
  it('calls onChange callback when value changes', () => {
    const mockCallback = jest.fn();
    render(
      <NumberInputSpinner
        increment={1}
        min={0}
        max={10}
        value={2}
        onChange={mockCallback}
        disabled={false}
      />
    );
    const decreaseButton = screen.getByRole('button', {
      name: /decrease value/i,
    });
    userEvent.click(decreaseButton);
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toBeCalledWith(1);
  });
});
