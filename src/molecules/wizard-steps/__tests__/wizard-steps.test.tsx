import React from 'react';
import { render, screen } from '@testing-library/react';
import { WizardSteps } from '../../..';
import { Step } from '../';

describe('Wizard Steps', () => {
  it('renders wizard', () => {
    const steps: Step[] = [
      {
        active: true,
        value: 'step 1',
      },
      {
        active: false,
        value: 'step 2',
      },
      {
        active: false,
        value: 'step 3',
      },
    ];

    const { asFragment } = render(<WizardSteps steps={steps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders 3 steps', () => {
    const steps: Step[] = [
      {
        active: true,
        value: 'Step 1',
        dataTestId: 'wizard-1',
      },
      {
        active: false,
        value: 'Step 2',
        dataTestId: 'wizard-2',
      },
      {
        active: false,
        value: 'Step 3',
        dataTestId: 'wizard-3',
      },
    ];

    render(<WizardSteps steps={steps} />);
    for (let step = 1; step < 4; ++step) {
      screen.getByText(`Step ${step}`);
    }
    expect(screen.queryAllByTestId(/step-wizard-/i)).toHaveLength(3);
  });
});
