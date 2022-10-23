import React from 'react';
import { NoteCard } from '../../src';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { colors } from '../../src/ions/variables';

export default {
  title: 'Components/Molecules/Note Card',
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
  dataTestId: 'note',
};

NoteCardText.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const note = canvas.getByTestId('note-value');

  expect(note).toHaveTextContent(NoteCardText.args.value);
  expect(canvas.getByTestId('note')).toHaveStyle({
    '--default': colors.grey,
    '--light': colors.lightGrey,
    '--dark': colors.darkGrey,
  });
};

export const NoteCardAction = NoteCardText.bind({});

NoteCardAction.storyName = 'With Action';
const mockedOnClick = jest.fn();
NoteCardAction.args = {
  ...NoteCardText.args,
  buttonValue: 'Awesome Button',
  onClick: mockedOnClick,
};
NoteCardAction.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(mockedOnClick).toHaveBeenCalledTimes(0);
  userEvent.click(canvas.getByRole('button'));
  expect(mockedOnClick).toHaveBeenCalledTimes(1);
};
