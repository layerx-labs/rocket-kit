import React from 'react';
import TagNumber, { TagNumberProps } from '..';

export default {
  title: 'Components/Atoms/Tag',
  component: TagNumber,
};

export const TagNumberComponent = (args: TagNumberProps) => (
  <TagNumber {...args} />
);

TagNumberComponent.storyName = 'Number';

TagNumberComponent.args = {
  label: 'Burgdoggen',
  value: 10,
};
