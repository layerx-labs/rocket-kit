import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import { ActionsMenu } from '../../..';
import { ActionMenu } from '../types';

describe('Actions Menu', () => {
  it('renders open menu', () => {
    const actions: ActionMenu<string>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: 'Go to Details',
        action: () => {},
      },
    ];

    const { asFragment } = render(
      <ActionsMenu<string> actions={actions} startsOpen />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders closed menu', () => {
    const actions: ActionMenu<string>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: 'Go to Details',
        action: () => {},
      },
    ];

    const { asFragment } = render(<ActionsMenu<string> actions={actions} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has action in open menu', () => {
    const actionText = 'Go to Details';
    const actions: ActionMenu<string>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: actionText,
        action: () => {},
      },
    ];

    render(<ActionsMenu<string> actions={actions} startsOpen />);
    screen.getByText(actionText);
  });

  it('has action in open menu with multiple items', () => {
    const actionText = 'Go to Details';
    const actions: ActionMenu<string>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: actionText,
        action: () => {},
      },
      {
        id: 'action2',
        type: 'default',
        value: 'Edit',
        action: () => {},
      },
      {
        id: 'action3',
        type: 'danger',
        value: 'Delete',
        action: () => {},
      },
    ];

    render(<ActionsMenu<string> actions={actions} startsOpen />);
    screen.getByText(actionText);
  });

  it('can open menu with click', () => {
    const actionText = 'Go to Details';
    const actions: ActionMenu<string>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: actionText,
        action: () => {},
      },
    ];

    render(<ActionsMenu<string> actions={actions} />);
    const foundButton = screen.getByTestId('action-menu-button');
    userEvent.click(foundButton);
    screen.getByText(actionText);
  });

  it('calls action callback on click', () => {
    interface ActionData {
      name: string;
      type: string;
    }

    const data: ActionData = {
      name: 'hello',
      type: 'test',
    };

    const onClick = jest.fn();
    const actionText = 'Go to Details';
    const actions: ActionMenu<ActionData>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: actionText,
        action: onClick,
      },
    ];

    render(
      <ActionsMenu<ActionData> actions={actions} startsOpen data={data} />
    );
    const action = screen.getByText(actionText);
    userEvent.click(action);
    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(expect.anything(), data);
  });
});
