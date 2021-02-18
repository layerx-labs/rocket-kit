import React from 'react';
import { render } from '@testing-library/react';
import { HorizontalNav, Icon } from '../../..';

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
    active: false,
  },
  {
    icon: 'rules',
    label: 'Rules',
    url: '#0',
    active: false,
  },
  {
    icon: 'resources',
    label: 'Resources',
    url: '#0',
    active: false,
  },
  {
    icon: 'projects',
    label: 'Projects',
    url: '#0',
    active: false,
  },
  {
    icon: 'users',
    label: 'Innovators',
    url: '#0',
    active: false,
  },
  {
    icon: 'backer',
    label: 'Backers',
    url: '#0',
    active: false,
  },
  {
    icon: 'faqs',
    label: 'Faqs',
    url: '#0',
    active: false,
  },
  {
    icon: 'notifications',
    label: 'Updates',
    url: '#0',
    active: false,
  },
  {
    icon: 'kai',
    label: 'Transactions',
    url: '#0',
    active: false,
  },
  {
    icon: 'trophy',
    label: 'Results',
    url: '#0',
    active: false,
  },
];

describe('Horizontal Nav', () => {
  it('renders', () => {
    const { asFragment } = render(
      <HorizontalNav
        items={menu.map((item, index) => (
          <li key={index} className={item.active ? 'active' : ''}>
            <a href={item.url}>
              {item.icon && <Icon icon={item.icon} />}
              {item.label}
            </a>
          </li>
        ))}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
