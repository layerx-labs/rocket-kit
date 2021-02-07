import React from 'react';
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

  it('has correct label and value', async () => {
    const label = 'Accounts';
    const value = '345';
    render(<CardValue label={label} value={value} kai />);
    await screen.getByText(label);
    await screen.getByText(value);
  });

  it('does not show arrow button', async () => {
    render(<CardValue label={'Amount'} value={'1234567'} kai />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('calls action callback', async () => {
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
