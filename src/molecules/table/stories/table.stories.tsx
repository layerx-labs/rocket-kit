import React from 'react';
import Table from '..';
import Tag from '../../../atoms/tag';
import { AvatarImage, ButtonLink } from '../../..';
import { ActionMenu } from '../../actions-menu/types';

export interface TableProps {
  border?: boolean;
}

interface Transaction {
  id: string;
  transactionName: string;
  amount: string;
  type: string;
  status: string;
  createdAt: string;
  avatar: string;
}

export default {
  title: 'Components/Molecules/Table',
  component: Table,
  argTypes: {
    border: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    loadingColumns: {
      control: {
        type: 'number',
      },
    },
    loadingRows: {
      control: {
        type: 'number',
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
      className: 'vkai',
      dataTestId: 'header-amount-id',
    },
    {
      id: 'type',
      value: 'Type',
      dataKey: 'type',
      className: 'center',
    },
    {
      id: 'status',
      value: 'Status',
      dataKey: 'status',
      renderer: (status: string) => <Tag value={status} />,
    },
    {
      id: 'created',
      value: 'Created',
      dataKey: 'createdAt',
    },
    {
      id: 'goTo',
      className: 'right',
      value: '',
      dataKey: 'goTo',
      renderer: () => <ButtonLink icon="mint" value="View details" url="#0" />,
    },
  ],
};

const rows: Transaction[] = [
  {
    id: '1',
    transactionName: 'A Triumph of Softwares',
    amount: '2700',
    type: 'Back',
    status: 'Published',
    createdAt: '2018-07-7 16:21:13',
    avatar: '',
  },
  {
    id: '2',
    transactionName: 'To the Moon',
    amount: '2000',
    type: 'Back',
    status: 'Draft',
    createdAt: '2018-07-7 15:46:19',
    avatar: '',
  },
  {
    id: '3',
    transactionName: 'The Wonders of Geek',
    amount: '5000',
    type: 'Back',
    status: 'Draft',
    createdAt: '2018-07-7 14:47:50',
    avatar: '',
  },
  {
    id: '4',
    transactionName: 'Meetup for the Good',
    avatar: './images/avatar.png',
    amount: '900',
    type: 'Transfer',
    status: 'Published',
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
  border: true,
  loading: false,
  loadingColumns: 4,
  loadingRows: 6,
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
