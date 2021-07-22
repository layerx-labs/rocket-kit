import React from 'react';
import Table from '..';
import { AvatarImage } from '../../..';
import { ActionMenu } from '../../actions-menu/types';

export interface TableProps {
  border?: boolean;
}

interface Transaction {
  id: string;
  transactionName: string;
  amount: string;
  type: string;
  createdAt: string;
  avatar: string;
}

export default {
  title: 'Design System/Molecules/Table',
  component: Table,
  argTypes: {
    border: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const actions: ActionMenu<Transaction>[] = [
  {
    id: 'actionDetails',
    type: 'default',
    value: 'Go to Details',
  },
  {
    id: 'actionDelete',
    type: 'danger',
    value: 'Delete',
  },
];

const columns = {
  columns: [
    {
      id: 'transactionName',
      value: 'Last Transaction',
      dataKey: 'transactionName',
      renderer: (transactionName: string, { avatar }: { avatar: string }) => (
        <>
          <AvatarImage url={avatar} alt={transactionName} /> {transactionName}
        </>
      ),
      className: 'avatar',
    },
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
    },
  ],
};

const rows: Transaction[] = [
  {
    id: '1',
    transactionName: 'To the Moon',
    amount: '2700',
    type: 'Back',
    createdAt: '2018-07-7 16:21:13',
    avatar: '',
  },
  {
    id: '2',
    transactionName: 'To the Moon',
    amount: '2000',
    type: 'Back',
    createdAt: '2018-07-7 15:46:19',
    avatar: '',
  },
  {
    id: '3',
    transactionName: 'To the Moon',
    amount: '5000',
    type: 'Back',
    createdAt: '2018-07-7 14:47:50',
    avatar: '',
  },
  {
    id: '4',
    transactionName: '@Caneco',
    avatar: './images/avatar.png',
    amount: '900',
    type: 'Transfer',
    createdAt: '2018-07-7 12:53:29',
  },
];

export const TableComponent = (args: TableProps) => (
  <Table<Transaction>
    options={columns}
    values={rows}
    actions={actions}
    {...args}
  />
);

TableComponent.storyName = 'Table';
TableComponent.args = {
  border: false,
};

const emptyRows: Transaction[] = [];

export const TableEmptyComponent = (args: TableProps) => (
  <Table<Transaction>
    options={columns}
    values={emptyRows}
    showEmpty
    {...args}
  />
);

TableEmptyComponent.storyName = 'Empty Table';
TableEmptyComponent.args = {};
