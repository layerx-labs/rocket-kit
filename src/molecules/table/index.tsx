import React, { useState } from 'react';
import clsx from 'clsx';
import { Button, EmptyTable, Icon } from '../..';
import { hasValue } from '../../utils/filters/has-value';
import { ActionMenu } from '../actions-menu/types';
import { ActionMenuList } from '../actions-menu';
import useVisible from '../../utils/hooks/use-visible';
import styles from './styles.module.css';

interface TableOption<CellDataType> {
  id: string;
  value: string;
  dataKey: string;
  renderer?: (
    value: any,
    data: CellDataType
  ) => JSX.Element | string | number | null | undefined;
  className?: string;
  dataTestId?: string;
}

export interface TableOptions<CellDataType> {
  columns: TableOption<CellDataType>[];
}

export interface TableProps<CellDataType> {
  border?: boolean;
  options: TableOptions<CellDataType>;
  values: (CellDataType | null)[];
  actions?: ActionMenu<CellDataType>[];
  dataTestId?: string;
  menuDataTestId?: string;
  actionMenuTestId?: string;
  loading?: boolean;
  loadingColumns?: number;
  loadingRows?: number;
  showEmpty?: boolean;
  emptyValue?: string;
  className?: string;
  style?: React.CSSProperties;
  startsOpen?: boolean;
}

export interface CellBaseType {
  id: string;
}

const Table = <CellData extends CellBaseType>(props: TableProps<CellData>) => {
  const {
    border = true,
    options,
    values = [],
    actions = [],
    dataTestId = 'table-test-id',
    menuDataTestId = 'table-action-menu',
    actionMenuTestId = 'icon-button',
    loading = false,
    loadingColumns = 4,
    loadingRows = 5,
    showEmpty = false,
    emptyValue = 'No Data',
    className = 'table',
    style,
    startsOpen = false,
  } = props;

  const { ref, isVisible, setIsVisible } =
    useVisible<HTMLDivElement>(startsOpen);

  const [rowData, setRowData] = useState({});
  const [rowIndex, setRowIndex] = useState<number | undefined>(undefined);
  const { columns = [] } = options;
  const hasActionMenu = actions.length > 0;
  const validValues = values.filter(hasValue);
  const hasValues = Array.isArray(values) && values.length > 0;
  const columnsSkeleton = columns.length > 0 ? columns.length : loadingColumns;

  if (showEmpty && !hasValues) {
    const columnHeaders = columns.map(column => column.value);
    return (
      <EmptyTable
        border={border}
        tableHead={columnHeaders}
        value={emptyValue}
      />
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.overflowWrapper}>
        <table
          className={clsx(
            styles.table,
            border && styles.hasBorder,
            loading && styles.isLoadingState,
            className
          )}
          data-testid={dataTestId}
          style={style}
        >
          <thead>
            <tr>
              {loading && !columns
                ? Array.from({ length: loadingColumns }, (_, i) => (
                    <th key={`skeleton-head-${i}`}>
                      <div className={styles.skeletonCell} />
                    </th>
                  ))
                : columns.map(
                    ({
                      id = '',
                      className = '',
                      value = '',
                      dataTestId: colDataTestId = null,
                    }) => (
                      <th
                        key={id}
                        className={className}
                        data-testid={
                          colDataTestId ? `th-${colDataTestId}` : null
                        }
                      >
                        {value}
                      </th>
                    )
                  )}
              {!loading && hasActionMenu && <th />}
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: loadingRows }, (_, rowIndex) => (
                  <tr key={`skeleton-row-${rowIndex}`}>
                    {Array.from({ length: columnsSkeleton }, (_, colIndex) => (
                      <td key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                        <div className={styles.skeletonCell} />
                      </td>
                    ))}
                  </tr>
                ))
              : validValues.map((row, index) => (
                  <tr key={row.id} data-testid={`row-${dataTestId}`}>
                    {columns.map(
                      ({
                        id = '',
                        dataKey = '',
                        className = '',
                        value = '',
                        renderer = null,
                        dataTestId,
                      }) => (
                        <td
                          key={id}
                          className={className}
                          data-label={value}
                          data-testid={`td-${dataTestId}`}
                        >
                          <div>
                            {renderer
                              ? renderer(row[dataKey as keyof CellData], row)
                              : (row[dataKey as keyof CellData] as unknown as React.ReactNode)}
                            {['tkai', 'vkai', 'lx', 'vote'].includes(className) && (
                              <Icon icon={className as 'tkai' | 'vkai' | 'lx' | 'vote'} fill="hsl(0, 0%, 16%)" />
                            )}
                          </div>
                        </td>
                      )
                    )}

                    {hasActionMenu && (
                      <td className="menu" data-testid={menuDataTestId}>
                        <div ref={ref}>
                          <Button
                            variant="text"
                            color="grey500"
                            icon="menuVert"
                            action={evt => {
                              evt.preventDefault();
                              setRowData(row);
                              setRowIndex(index);
                              setIsVisible(!isVisible);
                              evt.stopPropagation();
                            }}
                            dataTestId={actionMenuTestId}
                          />
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
          </tbody>
        </table>

        {isVisible && (
          <ActionMenuList
            actions={actions}
            data={rowData}
            rowIndex={rowIndex}
            handleOptionClick={() => {
              setIsVisible(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Table;
