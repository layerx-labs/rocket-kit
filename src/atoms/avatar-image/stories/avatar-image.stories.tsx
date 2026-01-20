import React from 'react';
import AvatarImage, { AvatarProps } from '..';

export default {
  title: 'Components/Atoms/Avatar Image',
  component: AvatarImage,
  argTypes: {
    boringType: {
      control: 'select',
      options: ['marble', 'beam', 'pixel', 'sunset', 'ring', 'bauhaus'],
    },
  },
};

export const PNG = (args: AvatarProps) => <AvatarImage {...args} />;

PNG.args = {
  size: 100,
  boring: false,
  boringType: 'pixel',
  square: false,
  alt: 'Maria Rincon',
  url: 'https://taikai.azureedge.net/O4f7yrc0ecq0JUEirIk1sZ2XItEpJ-xrIr2W03kRrJs/rs:fit:400:400:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy90YWlrYWkvbWFyaWFfNDAwXzQwMC5qcGc.jpg',
};

export const SVG = (args: AvatarProps) => <AvatarImage {...args} />;

SVG.args = {
  size: 100,
  boring: false,
  boringType: 'pixel',
  square: false,
  alt: 'Default Avatar',
  url: 'images/default-avatar.svg',
};

export const BoringAvatar = (args: AvatarProps) => <AvatarImage {...args} />;

BoringAvatar.args = {
  size: 100,
  boring: true,
  boringType: 'pixel',
  square: false,
  alt: 'Maria Rincon',
  url: '',
};
