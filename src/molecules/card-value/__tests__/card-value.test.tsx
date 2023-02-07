import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { CardValue } from '../../..';

describe('Card Value', () => {
  it('renders', () => {
    const { asFragment } = render(
      <CardValue label={'Amount'} value={'1234567'} currency="tkai" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct label and string value', () => {
    const label = 'Accounts';
    const value = '345';
    render(<CardValue label={label} value={value} currency="tkai" />);
    screen.getByText(label);
    screen.getByText(value);
  });

  it('has correct label and number value', () => {
    const label = 'Accounts';
    const value = 345;
    render(<CardValue label={label} value={value} currency="tkai" />);
    screen.getByText(label);
    screen.getByText(value);
  });

  it('does not show arrow button', () => {
    render(<CardValue label={'Amount'} value={'1234567'} currency="tkai" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls action callback', () => {
    const description =
      'Asymmetrical tbh irony echo park four dollar toast chia';
    const onClickAction = jest.fn();
    render(
      <CardValue
        label={'Amount'}
        value={'1234567'}
        currency="tkai"
        description={description}
        buttonValue="Open"
        onClick={onClickAction}
      />
    );

    userEvent.click(screen.getByRole('button'));
    screen.getByText(description);
    expect(onClickAction).toBeCalledTimes(1);
  });
});
