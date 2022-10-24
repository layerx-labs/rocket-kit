import React from 'react';
import Button, { ButtonProps } from '..';
import icons from '../../../ions/icons';
import { colors } from '../../../ions/variables';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'outline', 'text'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
    txtColor: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
    iconPosition: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['', ...Object.keys(icons)],
      },
    },
  },
};

export const ButtonComponent: ComponentStory<typeof Button> = (
  args: ButtonProps
) => <Button {...args} />;

const actionFn = jest.fn();
ButtonComponent.storyName = 'Action';
ButtonComponent.args = {
  variant: 'solid',
  rounded: false,
  color: 'purple500',
  txtColor: 'white',
  className: 'button',
  value: 'Dummie',
  iconPosition: 'right',
  icon: '',
  loading: false,
  ariaLabel: 'Dummie Button',
  ariaHidden: false,
  disabled: false,
  action: actionFn,
};
ButtonComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Make sure that color changes during hover
  const background = getComputedStyle(canvas.getByRole('button'));
  const hoveroBackground = getComputedStyle(
    canvas.getByRole('button'),
    ':hover'
  );
  expect(background).not.toEqual(hoveroBackground);

  // Make sure that it triggers click event when clicked
  expect(actionFn).toHaveBeenCalledTimes(0);
  userEvent.click(canvas.getByRole('button'));
  expect(actionFn).toHaveBeenCalledTimes(1);
};
