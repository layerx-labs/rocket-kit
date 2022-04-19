import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import { Button } from '../../..';
import ModalFooter from '..';

describe('Modal Footer', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ModalFooter closeValue={'Cancel'}>
        <Button type="submit" value="save" />
      </ModalFooter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('call close action', () => {
    const mockAction = jest.fn();
    render(
      <ModalFooter closeAction={mockAction}>
        <Button type="submit" value="save" />
      </ModalFooter>
    );

    const closeButton = screen.getByRole('button', { name: /close/i });

    userEvent.click(closeButton);
    expect(mockAction).toBeCalledTimes(1);
  });

  it('children button is visible and clickable', () => {
    const mockAction = jest.fn();
    render(
      <ModalFooter>
        <Button type="submit" value="save" action={mockAction} />
      </ModalFooter>
    );

    const saveButton = screen.getByRole('button', { name: /save/i });

    userEvent.click(saveButton);
    expect(mockAction).toBeCalledTimes(1);
  });
});
