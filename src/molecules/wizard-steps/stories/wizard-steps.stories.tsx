import React, { useState } from 'react';
import { Button, WizardSteps } from '../../..';

export default {
  title: 'Components/Molecules/Wizard Steps',
  component: WizardSteps,
};

export const WizardStepsComponent = () => {
  const wizardSteps = [
    {
      value: 'Step 1',
      active: true,
    },
    {
      value: 'Step 2',
      active: false,
    },
    {
      value: 'Step 3',
      active: false,
    },
  ];

  return <WizardSteps steps={wizardSteps} />;
};

WizardStepsComponent.storyName = 'Steps';

export const WizardStepsRendererComponent = () => {
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
