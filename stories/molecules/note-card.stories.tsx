import React from 'react';
import { NoteCard } from '../../src';

export default {
  title: 'Design System/Molecules/Note Card',
  component: NoteCard,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['grey', 'green', 'red'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

export const NoteCardText = args => <NoteCard {...args} />;

NoteCardText.storyName = 'Text Only';
NoteCardText.args = {
  color: 'grey',
  value:
    'Adaptogen humblebrag letterpress, plaid franzen authentic four loko street art vice succulents health goth art party offal 3 wolf moon. Synth lyft hoodie mustache blog narwhal small batch hot chicken enamel pin venmo vaporware subway tile health goth.',
};

export const NoteCardAction = NoteCardText.bind({});

NoteCardAction.storyName = 'With Action';
NoteCardAction.args = {
  ...NoteCardText.args,
  buttonValue: 'Awesome Button',
};
