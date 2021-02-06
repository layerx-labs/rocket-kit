import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActionMenu } from '../../actions-menu/types';
import { Avatar, Table } from '../../..';
import userEvent from '@testing-library/user-event';

describe('Table', () => {
  it('renders', async () => {
    interface CellData {
      id: string;
      transactionName: string;
      amount: string;
      type: string;
      createdAt: string;
      avatar: string;
    }

    const onClick = jest.fn();
    const actionText = 'Go to Details';
    const actions: ActionMenu<CellData>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: actionText,
        action: onClick,
      },
    ];

    const rows: CellData[] = [
      {
        id: '1',
        transactionName: 'To the Moon',
        amount: '2700',
        type: 'Back',
        createdAt: '2018-07-7 16:21:13',
        avatar: './images/default-avatar.svg',
      },
    ];

    const options = {
      columns: [
        {
          id: 'transactionName',
          value: 'Last Transaction',
          dataKey: 'transactionName',
          renderer: (transactionName: string, cell: CellData) => (
            <>
              <Avatar url={cell.avatar} alt={transactionName} />{' '}
              {transactionName}
            </>
          ),
          className: 'avatar',
        },
        {
          id: 'amount',
          value: 'Amount',
          dataKey: 'amount',
          className: 'kai',
        },
      ],
    };

    const { asFragment } = render(
      <Table<CellData> options={options} values={rows} actions={actions} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders 5 rows', async () => {
    interface CellData {
      id: string;
      transactionName: string;
      amount: string;
      type: string;
      createdAt: string;
      avatar: string;
    }

    const rows: CellData[] = [
      {
        id: '1',
        transactionName: 'To the Moon 1',
        amount: '2700',
        type: 'Back',
        createdAt: '2018-07-7 16:21:13',
        avatar: './images/default-avatar.svg',
      },
      {
        id: '2',
        transactionName: 'To the Moon 2',
        amount: '270000',
        type: 'Back',
        createdAt: '2019-07-7 16:21:13',
        avatar: './images/default-avatar.svg',
      },
      {
        id: '3',
        transactionName: 'To the Moon 3',
        amount: '99700',
        type: 'Back',
        createdAt: '2019-08-7 16:21:13',
        avatar: './images/default-avatar.svg',
      },
      {
        id: '4',
        transactionName: 'To the Moon 4',
        amount: '700',
        type: 'Back',
        createdAt: '2019-09-7 16:21:13',
        avatar: './images/default-avatar.svg',
      },
      {
        id: '5',
        transactionName: 'To the Moon 5',
        amount: '2',
        type: 'Back',
        createdAt: '2020-07-7 16:21:13',
        avatar: './images/default-avatar.svg',
      },
    ];

    const options = {
      columns: [
        {
          id: 'amount',
          value: 'Amount',
          dataKey: 'amount',
          className: 'kai',
          dataTestId: 'header-amount-id',
        },
        {
          id: 'type',
          value: 'Type',
          dataKey: 'type',
          className: 'center',
        },
        {
          id: 'created',
          value: 'Created',
          dataKey: 'createdAt',
          className: 'createdAt',
        },
        {
          id: 'transaction',
          value: 'Transaction',
          dataKey: 'transactionName',
        },
      ],
    };

    render(<Table<CellData> options={options} values={rows} />);
    for (let row = 1; row < 6; ++row) {
      screen.getByText(`To the Moon ${row}`);
    }
    expect(screen.queryAllByTestId(`td-header-amount-id`)).toHaveLength(5);
  });

  it('renders all table headers correctly', async () => {
    interface CellData {
      id: string;
      amount: string;
      type: string;
      createdAt: string;
    }

    const rows: CellData[] = [
      {
        id: '1',
        amount: '2700',
        type: 'Back',
        createdAt: '2018-07-7 16:21:13',
      },
    ];

    const headerAmount = 'Amount';
    const headerType = 'Type';
    const headerCreated = 'Created';
    const options = {
      columns: [
        {
          id: 'amount',
          value: headerAmount,
          dataKey: 'amount',
          className: 'kai',
        },
        {
          id: 'type',
          value: headerType,
          dataKey: 'type',
          className: 'center',
        },
        {
          id: 'created',
          value: headerCreated,
          dataKey: 'createdAt',
          className: 'createdAt',
        },
      ],
    };

    render(<Table<CellData> options={options} values={rows} />);

    screen.getByRole('columnheader', { name: headerAmount });
    screen.getByRole('columnheader', { name: headerType });
    screen.getByRole('columnheader', { name: headerCreated });
    expect(screen.getAllByRole('columnheader')).toHaveLength(3);
  });

  it('open action menu', async () => {
    interface CellData {
      id: string;
      transactionName: string;
      amount: string;
      type: string;
      createdAt: string;
    }

    const onClick = jest.fn();
    const actionText = 'Go to Details';
    const actions: ActionMenu<CellData>[] = [
      {
        id: 'actionDetails',
        type: 'default',
        value: actionText,
        action: onClick,
      },
      {
        id: 'actionDelete',
        type: 'danger',
        value: 'Delete',
      },
    ];

    const rows: CellData[] = [
      {
        id: '1',
        transactionName: 'To the Moon',
        amount: '2700',
        type: 'Back',
        createdAt: '2018-07-7 16:21:13',
      },
    ];

    const options = {
      columns: [
        {
          id: 'amount',
          value: 'Amount',
          dataKey: 'amount',
          className: 'kai',
          dataTestId: 'header-amount-id',
        },
        {
          id: 'type',
          value: 'Type',
          dataKey: 'type',
          className: 'center',
        },
        {
          id: 'created',
          value: 'Created',
          dataKey: 'createdAt',
          className: 'createdAt',
        },
        {
          id: 'transaction',
          value: 'Transaction',
          dataKey: 'transactionName',
        },
      ],
    };

    render(
      <Table<CellData> options={options} values={rows} actions={actions} />
    );

    userEvent.hover(screen.getByText(/To the Moon/i));
    userEvent.click(screen.getByTestId('icon-button'));
    expect(screen.getAllByTestId('li-action-menu')).toHaveLength(2);
    userEvent.click(screen.getByText(actionText));
    expect(onClick).toBeCalledTimes(1);
  });
});
