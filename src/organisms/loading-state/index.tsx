import React from 'react';
import * as Styles from './styles';

export interface LoadingStateProps {
  type: 'text' | 'card' | 'table' | 'value';
  lines?: number;
  cardsNumber?: number;
  header?: boolean;
  columnsNumber?: number;
  rowsNumber?: number;
  center?: boolean;
}

const LoadingState = (props: LoadingStateProps) => {
  const {
    type = 'text',
    lines = 3,
    cardsNumber = 4,
    header = true,
    columnsNumber = 4,
    rowsNumber = 3,
    center = true,
  } = props;

  let paragraphs = [];
  let cards = [];
  let tableHeader = [];
  let columns = [];
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

  for (let i = 0; i < columnsNumber; i++) {
    tableHeader.push(<div key={i} className="header"></div>);
  }

  for (let i = 0; i < columnsNumber * rowsNumber; i++) {
    columns.push(<div key={i} className="cell"></div>);
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
      loadingType = <Styles.Grid center={center}>{cards}</Styles.Grid>;
      break;

    case 'table':
      loadingType = (
        <div>
          <Styles.Table className="table" columnsNumber={columnsNumber}>
            {header && tableHeader}
            {columns}
          </Styles.Table>
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

  return <Styles.Wrapper type={type}>{loadingType}</Styles.Wrapper>;
};

export default LoadingState;
