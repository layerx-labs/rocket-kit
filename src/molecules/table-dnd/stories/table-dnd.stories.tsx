import React, { useState } from 'react';
import TableDnD from '..';
import { AvatarImage } from '../../..';
import { ActionMenu } from '../../actions-menu/types';

export interface TableDnDProps {
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
  title: 'Components/Molecules/Table',
  component: TableDnD,
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

export const TableDnDComponent = (args: TableDnDProps) => {
  const [tableRows, setTableRows] = useState(rows);
  return (
    <TableDnD
      {...args}
      options={columns}
      values={tableRows}
      actions={actions}
      onChange={(newRows: any) => setTableRows(newRows)}
    />
  );
};

TableDnDComponent.storyName = 'Table DnD';
TableDnDComponent.args = {
  border: false,
};
