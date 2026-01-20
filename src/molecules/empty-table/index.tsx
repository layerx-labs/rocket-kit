import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
        <div className={styles.cellText} />
      </div>
    );
  }

  for (let i = 0; i < 3; i++) {
    rows.push(
      <div className={styles.row} key={i}>
        {columns}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <span>{value}</span>
      </div>
      <div className={clsx(styles.head, border ? styles.hasBorder : styles.noBorder)}>
        {headCells}
      </div>
      <div className={clsx(styles.body, border ? styles.hasBorder : styles.noBorder)}>
        {rows}
      </div>
    </div>
  );
};

export default EmptyTable;
