import React from 'react';
import PaginationControl, { PageControlProps } from '..';

export default {
  title: 'Design System/Molecules/PaginationControl',
  component: PaginationControl,
};

export const PaginationControlComponent = (args: PageControlProps) => (
  <PaginationControl {...args} />
);

PaginationControlComponent.storyName = 'PaginationControl';
PaginationControlComponent.args = {
  page: 0,
  pageCount: 10,
  onPageChange: () => {},
};
