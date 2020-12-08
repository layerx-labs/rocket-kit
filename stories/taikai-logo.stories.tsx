import React from 'react';
import { TaikaiLogo } from '../src';

export default {
  title: 'Taikai Logo',
  component: TaikaiLogo,
};

export const DefaultLogo = () => <TaikaiLogo />;
export const CustomFillLogo = args => <TaikaiLogo {...args} />;

CustomFillLogo.args = {
  fill: 'red',
};
