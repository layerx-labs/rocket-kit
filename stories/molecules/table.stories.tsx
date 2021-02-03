import React from 'react';
import { Avatar, Table } from '../../src';

export default {
  title: 'Design System/Molecules/Table',
  component: Table,
  argTypes: {},
};

const actions = [
  {
    id: 'actionDetails',
    type: 'default',
    value: 'Go to Details',
    url: null,
    action: () => {},
  },
  {
    id: 'actionDelete',
    type: 'danger',
    value: 'Delete',
    url: null,
    action: () => {},
  },
];

const columns = {
  columns: [
    {
      id: 'transactionName',
      value: 'Last Transaction',
      dataKey: 'transactionName',
      renderer: (transactionName, { avatar }) => (
        <>
          <Avatar url={avatar} alt={transactionName} /> {transactionName}
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

const rows = [
  {
    id: 1,
    transactionName: 'To the Moon',
    amount: '2700',
    type: 'Back',
    createdAt: '2018-07-7 16:21:13',
    avatar: './images/default-avatar.svg',
  },
  {
    id: 2,
    transactionName: 'To the Moon',
    amount: '2000',
    type: 'Back',
    createdAt: '2018-07-7 15:46:19',
    avatar: './images/default-avatar.svg',
  },
  {
    id: 3,
    transactionName: 'To the Moon',
    amount: '5000',
    type: 'Back',
    createdAt: '2018-07-7 14:47:50',
    avatar: './images/default-avatar.svg',
  },
  {
    id: 4,
    transactionName: '@Caneco',
    avatar: './images/avatar.png',
    amount: '900',
    type: 'Transfer',
    createdAt: '2018-07-7 12:53:29',
  },
];

export const TableComponent = args => (
  <Table options={columns} values={rows} actions={actions} rowMenu {...args} />
);

TableComponent.storyName = 'Table';
TableComponent.args = {
  ariaLabel: 'Open submenu',
  actions,
  startsOpen: true,
};
