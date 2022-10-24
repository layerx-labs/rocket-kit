import React from 'react';
import Table from '..';
import Tag from '../../../atoms/tag';
import { AvatarImage } from '../../..';
import { ActionMenu } from '../../actions-menu/types';
import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

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

const mockedAction = jest.fn();
const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  mockedAction();
};
const actions: ActionMenu<Transaction>[] = [
  {
    id: 'actionDetails',
    type: 'default',
    value: 'Go to Details',
    action: onClick,
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

export const TableComponent: ComponentStory<typeof Table> = (
  args: TableProps
) => (
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
TableComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.queryAllByTestId(`td-header-amount-id`)).toHaveLength(4);
  expect(canvas.getAllByRole('columnheader')).toHaveLength(6);

  userEvent.hover(canvas.getByText(/To the Moon/i));
  userEvent.click(canvas.getByTestId('icon-button-2'));
  expect(
    canvas.getAllByTestId('li-action-menu-actionDetails')[0]
  ).toBeVisible();
  expect(canvas.getAllByTestId('li-action-menu-actionDelete')[0]).toBeVisible();
  expect(mockedAction).toBeCalledTimes(0);
  userEvent.click(canvas.getByText('Go to Details'));
  expect(mockedAction).toBeCalledTimes(1);
};

const emptyRows: Transaction[] = [];

export const TableEmptyComponent: ComponentStory<typeof Table> = (
  args: TableProps
) => (
  <Table<Transaction>
    options={columns}
    values={emptyRows}
    showEmpty
    {...args}
  />
);

TableEmptyComponent.storyName = 'Empty Table';
TableEmptyComponent.args = {};
TableEmptyComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByText('Amount')).toBeInTheDocument();
  expect(canvas.getByText('Type')).toBeInTheDocument();
  expect(canvas.getByText('Created')).toBeInTheDocument();

  expect(canvas.getByText(/no data/i)).toBeInTheDocument();
};
