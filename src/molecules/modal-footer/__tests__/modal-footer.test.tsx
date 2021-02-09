import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalFooter from '..';
import { Button } from '../../..';
import userEvent from '@testing-library/user-event';

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

    userEvent.click(screen.getByText(/close/i));
    expect(mockAction).toBeCalledTimes(1);
  });

  it('children button is visible and clickable', () => {
    const mockAction = jest.fn();
    render(
      <ModalFooter>
        <Button type="submit" value="save" action={mockAction} />
      </ModalFooter>
    );

    userEvent.click(screen.getByText(/save/i));
    expect(mockAction).toBeCalledTimes(1);
  });

  it('focus mode button is visible and clickable', () => {
    const mockAction = jest.fn();
    render(
      <ModalFooter
        focusMode
        focusModeAction={mockAction}
        focusModeValue="Focus mode on"
      >
        <Button type="submit" value="save" />
      </ModalFooter>
    );

    userEvent.click(screen.getByText(/focus mode on/i));
    expect(mockAction).toBeCalledTimes(1);
  });
});
