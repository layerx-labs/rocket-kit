import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../src';

describe('Avatar', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Avatar alt={'avatar alt'} url={'/dummy.png'} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Avatar has correct alt', async () => {
    const avatarAlt = 'user avatar';
    render(<Avatar alt={avatarAlt} url={'/dummy.png'} />);
    const avatar = await screen.findByAltText(avatarAlt);
    expect(avatar).toHaveProperty('src', 'http://localhost/dummy.png');
  });
});
