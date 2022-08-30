import React from 'react';
import EmptyTable, { EmptyTableProps } from '..';

export default {
  title: 'Components/Molecules/Empty Table',
  component: EmptyTable,
  argTypes: {},
};

export const EmptyTableComponent = (args: EmptyTableProps) => (
  <EmptyTable {...args} />
);

EmptyTableComponent.storyName = 'Empty Table';
EmptyTableComponent.args = {
  border: true,
  tableHead: [
    'Column 1',
    'Column 2',
    'Column 3',
    'Column 4',
    'Column 5',
    'Column 6',
  ],
  value: 'No data',
};
