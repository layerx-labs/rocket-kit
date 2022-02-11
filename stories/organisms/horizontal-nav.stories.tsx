import React from 'react';
import { HorizontalNav, Icon } from '../../src';

export default {
  title: 'Design System/Organisms/Navigation',
};

export const HorizontalNavComponent = () => {
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
      icon: 'kai',
      label: 'Transactions',
      url: '#0',
    },
    {
      icon: 'trophy',
      label: 'Results',
      url: '#0',
    },
  ];

  return (
    <HorizontalNav
      items={menu.map((item, index) => (
        <li key={index} className={item.active ? 'active' : null}>
          <a href={item.url}>
            {item.icon && <Icon icon={item.icon} />}
            {item.label}
          </a>
        </li>
      ))}
    />
  );
};

HorizontalNavComponent.storyName = 'Horizontal Nav';

HorizontalNavComponent.args = {
  color: 'grey',
  variant: 'solid',
  value: 'Burgdoggen',
};
