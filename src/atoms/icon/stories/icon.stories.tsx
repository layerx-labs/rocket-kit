import React from 'react';
import Icon, { IconProps } from '..';
import icons from '../../../ions/icons';
import styles from './styles.module.css';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
  },
};

export const Icons = (args: IconProps) => {
  const IconsList = (props: IconProps) => {
    const { fill } = props;
    return (
      <ul className={styles.list}>
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
      </ul>
    );
  };

  return <IconsList {...args} />;
};

Icons.storyName = 'All';
Icons.args = {
  fill: '#000000',
};

export const IconComponent = (args: IconProps) => <Icon {...args} />;

IconComponent.storyName = 'Single';
IconComponent.args = {
  ...Icons.args,
  icon: 'rocket',
};
IconComponent.argTypes = {
  icon: {
    control: 'select',
    options: Object.keys(icons),
  },
};
IconComponent.decorators = [
  (Story: any) => (
    <div style={{ width: '50px', height: '50px' }}>
      <Story />
    </div>
  ),
];
