import React from 'react';
import PaginationControl, { PageControlProps } from '..';

export default {
  title: 'Components/Molecules/PaginationControl',
  component: PaginationControl,
};

export const PaginationControlLight = (args: PageControlProps) => (
  <PaginationControl {...args} />
);

PaginationControlLight.storyName = 'Light';
PaginationControlLight.args = {
  page: 0,
  pageCount: 10,
  onPageChange: () => {},
};

export const PaginationControlDark = (args: PageControlProps) => (
  <PaginationControl {...args} />
);

PaginationControlDark.storyName = 'Dark';
PaginationControlDark.args = {
  dark: true,
  page: 0,
  pageCount: 10,
  onPageChange: () => {},
};
