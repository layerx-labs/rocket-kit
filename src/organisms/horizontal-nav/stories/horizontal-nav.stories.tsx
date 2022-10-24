import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import React, { MouseEventHandler } from 'react';
import HorizontalNav, { HorizontalNavInterface } from '..';
import { Icon } from '../../..';

export default {
  title: 'Components/Organisms/Navigation',
  component: HorizontalNav,
  argTypes: {
    customColor: { control: 'color' },
  },
};

const mockedActionDetection = jest.fn();
const mockedAction: (label: string) => MouseEventHandler<HTMLAnchorElement> =
  (actionLabel: string) => event => {
    event.preventDefault();
    event.stopPropagation();
    mockedActionDetection(actionLabel);
  };
const menu = [
  {
    icon: 'overview',
    label: 'Overview',
    url: '#0',
    active: true,
  },
  {
    icon: 'timeline',
    label: 'Timeline',
    url: '#0',
  },
  {
    icon: 'rules',
    label: 'Rules',
    url: '#0',
  },
  {
    icon: 'resources',
    label: 'Resources',
    url: '#0',
  },
  {
    icon: 'projects',
    label: 'Projects',
    url: '#0',
  },
  {
    icon: 'users',
    label: 'Innovators',
    url: '#0',
  },
  {
    icon: 'backer',
    label: 'Backers',
    url: '#0',
  },
  {
    icon: 'faqs',
    label: 'Faqs',
    url: '#0',
  },
  {
    icon: 'notifications',
    label: 'Updates',
    url: '#0',
  },
  {
    icon: 'trophy',
    label: 'Results',
    url: '#0',
  },
];

const items = menu.map((item, index) => (
  <li key={index} className={item.active ? 'active' : undefined}>
    <a href={item.url} onClick={mockedAction(item.label)}>
      {item.icon && <Icon icon={item.icon} />}
      {item.label}
    </a>
  </li>
));

export const HorizontalNavComponent: ComponentStory<typeof HorizontalNav> = (
  args: HorizontalNavInterface
) => {
  return <HorizontalNav {...args} />;
};
HorizontalNavComponent.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  // Make sure all the items are visible
  // and clickable (except for the first one, bc it is already selected)
  for (const item of menu.slice(1, 2)) {
    await expect(canvas.getByText(item.label)).toBeVisible();
    await expect(canvas.getByText(item.label)).toHaveAttribute(
      'href',
      item.url
    );
    await userEvent.click(canvas.getByText(item.label));
    await expect(mockedActionDetection).toHaveBeenCalledWith(item.label);
  }
};

HorizontalNavComponent.storyName = 'Horizontal Nav';

HorizontalNavComponent.args = {
  items: items,
  startsOpen: false,
};
