import React from 'react';
import * as Styles from './styles';

export interface ProgressBarProps {
  progress: number;
  value?: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { progress = 0, value = '' } = props;

  return (
    <Styles.Wrapper>
      <Styles.Bar>
        <Styles.Progress progress={progress} />
      </Styles.Bar>
      {value && <Styles.Value>{value}</Styles.Value>}
    </Styles.Wrapper>
  );
};

export default ProgressBar;
