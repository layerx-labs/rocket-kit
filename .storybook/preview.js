import React from 'react';
import GlobalStyles from '../src/globalStyles';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
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
