import React, { CSSProperties } from 'react';
import * as Styles from './styles';

export type Step = {
  active: boolean;
  value: string;
  dataTestId?: string;
};

export interface WizardStepsProps {
  className?: string;
  style?: CSSProperties;
  steps: Step[];
  dataTestId?: string;
}

const WizardSteps = (props: WizardStepsProps) => {
  const {
    className = 'wizard-steps',
    style,
    steps = [],
    dataTestId = 'wizard-steps-test-id',
  } = props;

  return (
    <div className={className} style={style} data-testid={dataTestId}>
      <Styles.Steps>
        {steps.map((step, index) => (
          <Styles.Step
            key={index}
            active={step.active}
            data-testid={`step-${step.dataTestId}`}
          >
            <div>
              <span>{step.value}</span>
            </div>
          </Styles.Step>
        ))}
      </Styles.Steps>
    </div>
  );
};

export default WizardSteps;
