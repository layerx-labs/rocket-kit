import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface LoadingStateProps {
  type: 'text' | 'card' | 'value';
  lines?: number;
  cardsNumber?: number;
  center?: boolean;
}

const LoadingState = (props: LoadingStateProps) => {
  const { type = 'text', lines = 3, cardsNumber = 4, center = true } = props;

  let paragraphs = [];
  let cards = [];
  let loadingType;

  for (let i = 0; i < lines; i++) {
    paragraphs.push(<div key={i} className="paragraph"></div>);
  }

  for (let i = 0; i < cardsNumber; i++) {
    cards.push(
      <div key={i} className="card">
        <div className="cover"></div>
        <div className="avatar"></div>
        <div className="title"></div>
        <div className="paragraph"></div>
        <div className="paragraph"></div>
        <div className="paragraph"></div>
        <div className="paragraph"></div>
      </div>
    );
  }

  switch (type) {
    case 'text':
      loadingType = (
        <div>
          <div>
            <div className="title"></div>
            <div className="subtitle"></div>
            {paragraphs}
          </div>
        </div>
      );
      break;

    case 'card':
      loadingType = (
        <div className={clsx(styles.grid, center && styles.gridCenter)}>
          {cards}
        </div>
      );
      break;

    case 'value':
      loadingType = (
        <div>
          <div>
            <div className="value"></div>
          </div>
        </div>
      );
      break;

    default:
      loadingType = (
        <div>
          <div>
            <div className="title"></div>
            <div className="subtitle"></div>
            {paragraphs}
          </div>
        </div>
      );
  }

  return <div className={styles.wrapper}>{loadingType}</div>;
};

export default LoadingState;
