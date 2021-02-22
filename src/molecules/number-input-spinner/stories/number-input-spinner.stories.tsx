import React from 'react';
import NumberInputSpinner from '..';

export default {
  title: 'Design System/Molecules/Number Spinner',
  component: NumberInputSpinner,
  argTypes: {
    // color: {
    //   control: {
    //     type: 'select',
    //     options: ['primary', 'warning', 'danger', 'info'],
    //   },
    // },
    // variant: {
    //   control: {
    //     type: 'inline-radio',
    //     options: ['solid', 'outline'],
    //   },
    // },
  },
};

export const NumberInputSpinnerComponent = () => (
  <NumberInputSpinner value="10" onChange={() => {}} />
);

NumberInputSpinnerComponent.storyName = 'Number Spinner';

// NumberInputSpinnerComponent.args = {
//   color: 'info',
//   variant: 'solid',
//   value: 'Burgdoggen',
// };
