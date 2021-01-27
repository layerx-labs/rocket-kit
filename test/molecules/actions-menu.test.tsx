import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionsMenu } from '../../src';
import { ActionMenu } from '../../src/molecules/actions-menu/types';

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

  it('open menu has action', async () => {
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
    const foundAction = await screen.getByText(actionText);
    expect(foundAction).toBeTruthy();
  });

  it('can open menu with click', async () => {
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
    const foundButton = await screen.getByTestId('action-menu-button');
    expect(foundButton).toBeTruthy();
    userEvent.click(foundButton);
    const foundAction = await screen.getByText(actionText);
    expect(foundAction).toBeTruthy();
    screen.logTestingPlaygroundURL();
  });
});
