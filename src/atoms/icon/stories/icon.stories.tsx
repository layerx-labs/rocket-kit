import React from 'react';
import Icon, { IconProps } from '..';
import icons from '../../../ions/icons';
import * as Styles from './styles';

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
  },
};

export const Icons = (args: IconProps) => {
  const IconsList = (props: IconProps) => {
    const { fill } = props;
    return (
      <Styles.List>
        {Object.keys(icons).map(icon => (
          <li key={icon}>
            <div>
              <Icon icon={icon} fill={fill} />
            </div>
            <div>
              <span>{icon}</span>
            </div>
          </li>
        ))}
      </Styles.List>
    );
  };

  return <IconsList {...args} />;
};

Icons.story = {
  name: 'All',
  args: {
    fill: '#000000',
  },
};

export const IconComponent = (args: IconProps) => <Icon {...args} />;

IconComponent.story = {
  name: 'Single',
  args: {
    ...Icons.story.args,
    icon: 'rocket',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: '50px', height: '50px' }}>
        <Story />
      </div>
    ),
  ],
};
