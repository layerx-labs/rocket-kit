import React from 'react';
import { Tag } from '../src';

export default {
  title: 'Design System|Atoms/Tags',
  component: Tag,
};

export const TagPrimaryComponent = (args) => <Tag {...args} />;

TagPrimaryComponent.args = {
  color: 'primary',
  value: 'Burgdoggen',
};

export const TagOrangeComponent = (args) => <Tag color="orange" {...args} />;

TagOrangeComponent.args = {
  color: 'orange',
  value: 'Burgdoggen',
};

export const TagDangerComponent = (args) => <Tag {...args} />;

TagDangerComponent.args = {
  color: 'danger',
  value: 'Burgdoggen',
};

export const TagInfoComponent = (args) => <Tag {...args} />;

TagInfoComponent.args = {
  color: 'info',
  value: 'Burgdoggen',
};

export const TagOutlineComponent = (args) => <Tag {...args} />;

TagOutlineComponent.args = {
  color: 'outline',
  value: 'Burgdoggen',
};
