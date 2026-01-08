import React from 'react';
import CardValue, { CardValueProps } from '..';

export default {
  title: 'Components/Molecules/Card Value',
  component: CardValue,
  argTypes: {
    currency: {
      control: {
        type: 'select',
        options: ['', 'lx', 'vote', 'tkai', 'vkai'],
      },
    },
  },
};

export const CardValueComponentKAI = (args: CardValueProps) => (
  <CardValue {...args} />
);

CardValueComponentKAI.storyName = 'With LX';
CardValueComponentKAI.args = {
  label: 'Amount',
  currency: 'lx',
  value: '13000',
  showArrowButton: false,
};

export const CardValueComponent = (args: CardValueProps) => (
  <CardValue {...args} />
);

CardValueComponent.storyName = 'No Currency';
CardValueComponent.args = {
  label: 'Innovators',
  value: '42',
  showArrowButton: false,
};

export const CardValueComponentButton = (args: CardValueProps) => (
  <CardValue {...args} />
);

CardValueComponentButton.storyName = 'With button';
CardValueComponentButton.args = {
  label: 'Innovators',
  value: '42',
  description:
    "I'm baby small batch blue bottle keytar, church-key man braid flannel austin twee poutine mustache.",
  buttonValue: 'Go to Innovators',
  onClick: () => {},
};
