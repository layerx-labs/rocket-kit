import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardValue } from '../../..';

describe('Card Value', () => {
  it('renders', () => {
    const { asFragment } = render(
      <CardValue label={'Amount'} value={'1234567'} kai />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct label and string value', () => {
    const label = 'Accounts';
    const value = '345';
    render(<CardValue label={label} value={value} kai />);
    screen.getByText(label);
    screen.getByText(value);
  });

  it('has correct label and number value', () => {
    const label = 'Accounts';
    const value = 345;
    render(<CardValue label={label} value={value} kai />);
    screen.getByText(label);
    screen.getByText(value);
  });

  it('does not show arrow button', () => {
    render(<CardValue label={'Amount'} value={'1234567'} kai />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls action callback', () => {
    const onClickAction = jest.fn();
    render(
      <CardValue
        label={'Amount'}
        value={'1234567'}
        kai
        showArrowButton
        onClick={onClickAction}
      />
    );

    userEvent.click(screen.getByRole('button'));
    expect(onClickAction).toBeCalledTimes(1);
  });
});
