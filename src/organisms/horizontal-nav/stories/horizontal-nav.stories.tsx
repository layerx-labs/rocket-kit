import React from 'react';
import HorizontalNav from '..';
import { HorizontalNavInterface } from '../types';

export default {
  title: 'Components/Organisms/Navigation',
  component: HorizontalNav,
  argTypes: {
    customColor: { control: 'color' },
  },
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
    icon: 'tkai',
    label: 'Transactions',
    url: '#0',
  },
  {
    icon: 'trophy',
    label: 'Results',
    url: '#0',
  },
];

export const HorizontalNavComponent = (args: HorizontalNavInterface) => {
  return <HorizontalNav {...args} />;
};

HorizontalNavComponent.storyName = 'Horizontal Nav';

HorizontalNavComponent.args = {
  items: menu,
};
