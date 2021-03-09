import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Modal from '..';

describe('Modal', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Modal
        title="Checkout"
        isShowing
        closeValue={'Submit'}
        footer
        hide={() => {}}
      >
        <p>ground round corned beef</p>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('is not showing', () => {
    render(
      <Modal
        title="Checkout"
        isShowing={false}
        closeValue={'Submit'}
        footer
        hide={() => {}}
      >
        <p>ground round corned beef</p>
      </Modal>
    );

    expect(
      screen.queryByText(/ground round corned beef/)
    ).not.toBeInTheDocument();
  });

  it('is showing', () => {
    const onClick = jest.fn();
    render(
      <Modal
        title="Checkout"
        isShowing={true}
        closeValue={'Submit'}
        footer
        hide={onClick}
      >
        <p>ground round corned beef</p>
      </Modal>
    );

    screen.getByText(/ground round corned beef/i);
    screen.getByText(/checkout/i);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onClick).toBeCalledTimes(1);
  });
});
