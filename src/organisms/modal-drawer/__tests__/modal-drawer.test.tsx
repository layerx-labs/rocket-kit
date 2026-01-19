import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ModalDrawer from '..';

describe('ModalDrawer', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ModalDrawer
        isShowing
        title="Checkout"
        closeValue={'Close'}
        hide={() => {}}
      >
        <p>ground round corned beef</p>
      </ModalDrawer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('is not showing', () => {
    render(
      <ModalDrawer
        isShowing={false}
        title="Checkout"
        closeValue={'Close'}
        hide={() => {}}
      >
        <p>ground round corned beef</p>
      </ModalDrawer>
    );

    expect(
      screen.queryByText(/ground round corned beef/)
    ).not.toBeInTheDocument();
  });

  it('is showing', () => {
    const onClick = jest.fn();
    render(
      <ModalDrawer
        isShowing={true}
        title="Checkout"
        closeValue={'Submit'}
        hide={onClick}
      >
        <p>ground round corned beef</p>
      </ModalDrawer>
    );

    screen.getByText(/ground round corned beef/i);
    screen.getByText(/checkout/i);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onClick).toBeCalledTimes(1);
  });
});
