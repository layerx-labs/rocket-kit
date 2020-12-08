import React from 'react';
import { Avatar } from '../src';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const AvatarPNG = () => (
  <Avatar alt={'alt'} url={'./images/avatar.png'} />
);

export const AvatarSVG = () => (
    <Avatar alt={'alt'} url={'./images/default-avatar.svg'} />
  );