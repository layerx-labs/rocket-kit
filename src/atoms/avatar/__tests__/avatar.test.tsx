import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../../..';

describe('Avatar', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Avatar alt={'avatar alt'} url={'/dummy.png'} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct alt and src', async () => {
    const avatarAlt = 'user avatar';
    render(<Avatar alt={avatarAlt} url={'/dummy.png'} />);
    const avatar = await screen.queryByAltText(avatarAlt);
    expect(avatar).toHaveProperty('src', 'http://localhost/dummy.png');
  });
});
