import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import PaginationControl, { PageControlProps } from '..';

export default {
  title: 'Design System/Molecules/PaginationControl',
  component: PaginationControl,
  decorators: [withDesign],
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

PaginationControlComponent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2aV5JcANU1uWQntLdMSTti/TAIKAI-Design-System?node-id=2%3A2',
  },
};
