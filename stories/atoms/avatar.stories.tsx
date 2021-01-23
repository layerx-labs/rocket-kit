import React from 'react';
import { Avatar } from '../../src';

export default {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
};

export const PNG = () => <Avatar alt={'alt'} url={'./images/avatar.png'} />;

export const SVG = () => (
  <Avatar alt={'alt'} url={'./images/default-avatar.svg'} />
);
