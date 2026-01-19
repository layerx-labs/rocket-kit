import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
      <ul className={styles.steps}>
        {steps.map((step, index) => (
          <li
            key={index}
            className={clsx(styles.step, step.active && styles.isActive)}
            data-testid={`step-${step.dataTestId}`}
          >
            <div>
              <span>{step.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WizardSteps;
