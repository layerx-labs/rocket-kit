import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FieldWidthButton } from '../../..';

describe('FieldWidthButton', () => {
  it('renders', () => {
    const { asFragment } = render(
      <FieldWidthButton type="text" value="this is my text" buttonIcon="copy" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'this is my text';

    // It renders with an initial value
    const { rerender } = render(
      <FieldWidthButton type="text" value={textValue} buttonIcon="copy" />
    );
    const foundInput = screen.getByDisplayValue(textValue);
    expect(foundInput).toHaveValue(textValue);

    // The previous value is replaced by changing the prop `value`
    const secondTextValue = 'custom text after render';
    rerender(
      <FieldWidthButton type="text" value={secondTextValue} buttonIcon="copy" />
    );
    expect(screen.getByDisplayValue(secondTextValue)).toHaveValue(
      secondTextValue
    );
  });

  it('calls action callback', async () => {
    const onClickAction = jest.fn();
    const textValue = 'https://taikai.network';
    const buttonText = 'Copy';

    render(
      <FieldWidthButton
        type="text"
        value={textValue}
        buttonIcon="copy"
        buttonValue={buttonText}
        buttonAction={onClickAction}
      />
    );

    const button = screen.getByRole('button', { name: buttonText });
    userEvent.click(button);
    expect(onClickAction).toBeCalledTimes(1);
  });
});
