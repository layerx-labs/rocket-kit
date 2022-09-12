import React, { useState } from 'react';
import { Button, EmptyTable, Icon } from '../..';
import { hasValue } from '../../utils/filters/has-value';
import { ActionMenu } from '../actions-menu/types';
import { ActionMenuList } from '../actions-menu';
import useVisible from '../../utils/hooks/use-visible';
import * as Styles from './styles';

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
    loadingRows = 20,
    showEmpty = false,
    emptyValue = 'No Data',
    className = 'table',
    style,
    startsOpen = false,
  } = props;

  const { ref, isVisible, setIsVisible } = useVisible<HTMLDivElement>(
    startsOpen
  );

  const [rowData, setRowData] = useState({});
  const [rowIndex, setRowIndex] = useState<number | undefined>(undefined);
  const { columns = [] } = options;
  const hasActionMenu = actions.length > 0;
  const validValues = values.filter(hasValue);
  const hasValues = Array.isArray(values) && values.length > 0;

  const headSkeleton = (
    <th>
      <Styles.SkeletonCell />
    </th>
  );

  const cellSkeleton = (
    <td>
      <Styles.SkeletonCell />
    </td>
  );

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
    <Styles.TableWrapper>
      <Styles.OverflowWrapper>
        <Styles.Table
          border={border}
          data-testid={dataTestId}
          className={className}
          style={style}
        >
          <thead>
            <tr>
              {loading && !columns
                ? Array.from({ length: loadingColumns }, () => headSkeleton)
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
              ? Array.from({ length: loadingRows }, () => (
                  <tr>
                    {Array.from(
                      { length: columnsSkeleton },
                      () => cellSkeleton
                    )}
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
                              : row[dataKey as keyof CellData]}
                            {className === 'kai' ? (
                              <Icon icon="kai" fill="hsl(0, 0%, 16%)" />
                            ) : null}
                          </div>
                        </td>
                      )
                    )}

                    {hasActionMenu && (
                      <td className="menu" data-testid={menuDataTestId}>
                        <div ref={ref}>
                          <Button
                            variant="text"
                            color="grey"
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
        </Styles.Table>

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
      </Styles.OverflowWrapper>
    </Styles.TableWrapper>
  );
};

export default Table;
