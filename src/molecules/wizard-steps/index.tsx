import React, { CSSProperties } from 'react';
import * as Styles from './styles';

type Step = {
  active: boolean;
  value: string;
  renderer?: string | React.ReactNode;
};

export interface WizardStepsProps {
  className?: string;
  style?: CSSProperties;
  steps: Step[];
}

const WizardSteps = (props: WizardStepsProps) => {
  const { className = 'wizard-steps', style, steps = [] } = props;

  return (
    <Styles.Wrapper className={className} style={style}>
      <Styles.Steps>
        {steps.map((step, index) => (
          <Styles.Step key={index} active={step.active}>
            <div>
              <span>{step.value}</span>
            </div>
          </Styles.Step>
        ))}
      </Styles.Steps>
    </Styles.Wrapper>
  );
};

export default WizardSteps;
