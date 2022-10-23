import { ComponentStory } from '@storybook/react';
import { within } from '@testing-library/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import PaginationControl, { PageControlProps } from '..';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Molecules/PaginationControl',
  component: PaginationControl,
  decorators: [withDesign],
};

export const PaginationControlLight: ComponentStory<typeof PaginationControl> =
  (args: PageControlProps) => <PaginationControl {...args} />;

PaginationControlLight.storyName = 'Light';
PaginationControlLight.args = {
  page: 0,
  pageCount: 10,
  onPageChange: () => {},
  dataTestId: 'pagination',
};

PaginationControlLight.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2aV5JcANU1uWQntLdMSTti/TAIKAI-Design-System?node-id=2%3A2',
  },
};
PaginationControlLight.play = ({ canvasElement }) => {
  const pagination = within(canvasElement).getByTestId('pagination');

  // Make sure the 3rd party library component is rendering
  const thirdParty = pagination.getElementsByClassName('pagination')[0];
  expect(thirdParty).toBeVisible();
};

export const PaginationControlDark: ComponentStory<typeof PaginationControl> = (
  args: PageControlProps
) => <PaginationControl {...args} />;

PaginationControlDark.storyName = 'Dark';
PaginationControlDark.args = {
  dark: true,
  page: 0,
  pageCount: 10,
  onPageChange: () => {},
  dataTestId: 'pagination',
};

PaginationControlDark.parameters = {
  backgrounds: { default: 'dark' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2aV5JcANU1uWQntLdMSTti/TAIKAI-Design-System?node-id=36%3A49',
  },
};
PaginationControlDark.play = ({ canvasElement }) => {
  const pagination = within(canvasElement).getByTestId('pagination');

  // Make sure the 3rd party library component is rendering
  const thirdParty = pagination.getElementsByClassName('pagination')[0];
  expect(thirdParty).toBeVisible();
};
