import React from 'react';
import GlobalStyles from '../src/globalStyles';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#0D0F19',
      },
    ],
  },
};

export const withGlobalStyles = storyFn => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
};

addDecorator(withGlobalStyles);
