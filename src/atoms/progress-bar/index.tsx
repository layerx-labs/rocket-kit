import React from 'react';
import styles from './styles.module.css';

export interface ProgressBarProps {
  progress: number;
  value?: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { progress = 0, value = '' } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ width: progress ? `${progress}%` : 0 }}
        />
      </div>
      {value && <div className={styles.value}>{value}</div>}
    </div>
  );
};

export default ProgressBar;
