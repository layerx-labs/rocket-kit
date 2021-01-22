import React from 'react';
import { NoteCard } from '../../src';

export default {
  title: 'Design System/Molecules/Note Card',
  component: NoteCard,
  // argTypes: {
  //   value: "sadasd",
  // },
};

export const NoteCardComponent = (args) => <NoteCard {...args} />;

NoteCardComponent.storyName = 'Note Card';

NoteCardComponent.args = {
  value: 'Dummie',
};
