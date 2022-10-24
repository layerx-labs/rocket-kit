import { ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import React, { useState } from 'react';
import { Button, WizardSteps } from '../../..';

export default {
  title: 'Components/Molecules/Wizard Steps',
  component: WizardSteps,
};

export const WizardStepsComponent: ComponentStory<typeof WizardSteps> = () => {
  const wizardSteps = [
    {
      value: 'Step 1',
      active: true,
      dataTestId: 'wizard-1',
    },
    {
      value: 'Step 2',
      active: false,
      dataTestId: 'wizard-2',
    },
    {
      value: 'Step 3',
      active: false,
      dataTestId: 'wizard-3',
    },
  ];

  return <WizardSteps steps={wizardSteps} />;
};

WizardStepsComponent.storyName = 'Steps';

WizardStepsComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.queryAllByTestId(/step-wizard-/i)).toHaveLength(3);
};

export const WizardStepsRendererComponent: ComponentStory<typeof WizardSteps> =
  () => {
    const DEFAULT_CURRENT_STEP = 'step_1';
    const [activeStep, setActiveStep] = useState(DEFAULT_CURRENT_STEP);

    const wizardRenderer = [
      {
        value: 'Step 1',
        active: activeStep === 'step_1',
        renderer: () => (
          <>
            <p>This is step 1.</p>
            <Button
              icon="arrowRight"
              value="Go to Step 2"
              action={() => {
                setActiveStep('step_2');
              }}
            />
          </>
        ),
      },
      {
        value: 'Step 2',
        active: activeStep === 'step_2',
        renderer: () => (
          <>
            <p>This is step 2.</p>
            <Button
              icon="arrowRight"
              value="Go to Step 3"
              action={() => {
                setActiveStep('step_3');
              }}
            />
          </>
        ),
      },
      {
        value: 'Step 3',
        active: activeStep === 'step_3',
        renderer: () => (
          <>
            <p>This is step 3.</p>
            <Button
              icon="rocket"
              value="Restart"
              action={() => {
                setActiveStep('step_1');
              }}
            />
          </>
        ),
      },
    ];

    const [currentStep = null] = wizardRenderer.filter(step =>
      Boolean(step.active)
    );

    return (
      <div>
        <WizardSteps steps={wizardRenderer} />
        {currentStep && currentStep.renderer ? currentStep.renderer() : null}
      </div>
    );
  };

WizardStepsRendererComponent.storyName = 'Renderer';
WizardStepsRendererComponent.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Make sure only 1st step is visible
  expect(canvas.queryByText('This is step 1.')).toBeInTheDocument();
  expect(canvas.queryByText('This is step 2.')).not.toBeInTheDocument();
  expect(canvas.queryByText('This is step 3.')).not.toBeInTheDocument();

  // Make sure only 2nd step is visible when clicked next
  userEvent.click(canvas.getByRole('button'));
  expect(canvas.queryByText('This is step 1.')).not.toBeInTheDocument();
  expect(canvas.queryByText('This is step 2.')).toBeInTheDocument();
  expect(canvas.queryByText('This is step 3.')).not.toBeInTheDocument();

  // Make sure only 3rd step is visible when clicked next
  userEvent.click(canvas.getByRole('button'));
  expect(canvas.queryByText('This is step 1.')).not.toBeInTheDocument();
  expect(canvas.queryByText('This is step 2.')).not.toBeInTheDocument();
  expect(canvas.queryByText('This is step 3.')).toBeInTheDocument();

  // Make sure only 1rd step is visible when clicked reset
  userEvent.click(canvas.getByRole('button'));
  expect(canvas.queryByText('This is step 1.')).toBeInTheDocument();
  expect(canvas.queryByText('This is step 2.')).not.toBeInTheDocument();
  expect(canvas.queryByText('This is step 3.')).not.toBeInTheDocument();
};
