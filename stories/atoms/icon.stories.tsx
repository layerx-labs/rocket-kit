import React from 'react';
import { Icon } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <div style={{ width: '50px', height: '50px' }}>
        <Story />
      </div>
    ),
  ],
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

export const IconComponent = (args) => <Icon {...args} />;

IconComponent.storyName = 'Icon';

IconComponent.args = {
  fill: '#000000',
  icon: 'rocket',
};
