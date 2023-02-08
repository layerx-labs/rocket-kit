import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import PaginationControl, { PageControlProps } from '..';

export default {
  title: 'Components/Molecules/PaginationControl',
  component: PaginationControl,
  decorators: [withDesign],
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

PaginationControlLight.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2aV5JcANU1uWQntLdMSTti/TAIKAI-Design-System?node-id=2%3A2',
  },
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

PaginationControlDark.parameters = {
  backgrounds: { default: 'dark' },
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2aV5JcANU1uWQntLdMSTti/TAIKAI-Design-System?node-id=36%3A49',
  },
};
