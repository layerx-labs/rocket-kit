import React from 'react';
import { Icon } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
  },
};

export const IconComponent = (args) => (
  <div style={{ width: '50px', height: '50px' }}>
    <Icon {...args} />
  </div>
);

IconComponent.args = {
  fill: '#000000',
  icon: 'rocket',
};
