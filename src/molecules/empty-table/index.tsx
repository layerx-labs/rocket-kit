import React from 'react';
import * as Styles from './styles';

export interface EmptyTableProps {
  border?: boolean;
  value: string;
  tableHead: string[];
}

const EmptyTable = (props: EmptyTableProps) => {
  let rows = [];
  let columns = [];

  const { border = false, tableHead = [], value } = props;
  const headCells = tableHead.map((value, index) => (
    <div key={index}>{value}</div>
  ));

  for (let i = 0; i < tableHead.length; i++) {
    columns.push(
      <div key={i}>
        <Styles.EmptyTableCellText />
      </div>
    );
  }

  for (let i = 0; i < 3; i++) {
    rows.push(<Styles.EmptyTableRow key={i}>{columns}</Styles.EmptyTableRow>);
  }

  return (
    <Styles.EmptyTableWrapper>
      <Styles.EmptyTableOverlay>
        <span>{value}</span>
      </Styles.EmptyTableOverlay>
      <Styles.EmptyTableHead border={border}>{headCells}</Styles.EmptyTableHead>
      <Styles.EmptyTableBody border={border}>{rows}</Styles.EmptyTableBody>
    </Styles.EmptyTableWrapper>
  );
};

export default EmptyTable;
