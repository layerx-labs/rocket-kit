import React from 'react';
import { CardValue } from '../../src';

export default {
  title: 'Design System/Molecules/Card Value',
  component: CardValue,
  argTypes: {},
};

export const CardValueComponentKAI = args => <CardValue {...args} />;

CardValueComponentKAI.storyName = 'With KAI';
CardValueComponentKAI.args = {
  label: 'Amount',
  kai: true,
  value: '13000',
  showArrowButton: false,
};

export const CardValueComponent = args => <CardValue {...args} />;

CardValueComponent.storyName = 'No Currency';
CardValueComponent.args = {
  label: 'Innovators',
  kai: false,
  value: '42',
  showArrowButton: false,
};

export const CardValueComponentButton = args => <CardValue {...args} />;

CardValueComponentButton.storyName = 'With button';
CardValueComponentButton.args = {
  label: 'Innovators',
  kai: false,
  value: '42',
  description:
    "I'm baby small batch blue bottle keytar, church-key man braid flannel austin twee poutine mustache.",
  buttonValue: 'Go to Innovators',
  onClick: () => {},
};
