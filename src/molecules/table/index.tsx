import React from 'react';
import { ActionsMenu, EmptyTable, Icon } from '../..';
import { hasValue } from '../../utils/filters/has-value';
import { ActionMenu } from '../actions-menu/types';
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
  showEmpty?: boolean;
  emptyValue?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface CellBaseType {
  id: string;
}

const Table = <CellData extends CellBaseType>(props: TableProps<CellData>) => {
  const {
    border = false,
    options,
    values = [],
    actions = [],
    dataTestId = 'table-test-id',
    menuDataTestId = 'table-action-menu',
    actionMenuTestId = 'icon-button',
    showEmpty = false,
    emptyValue = 'No Data',
    className = 'table',
    style,
  } = props;

  const { columns = [] } = options;
  const hasActionMenu = actions.length > 0;

  const validValues = values.filter(hasValue);

  const hasValues = Array.isArray(values) && values.length > 0;
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
      <Styles.Table
        border={border}
        data-testid={dataTestId}
        className={className}
        style={style}
      >
        <thead>
          <tr>
            {columns.map(
              ({
                id = '',
                className = '',
                value = '',
                dataTestId: colDataTestId = null,
              }) => (
                <th
                  key={id}
                  className={className}
                  data-testid={colDataTestId ? `th-${colDataTestId}` : null}
                >
                  {value}
                </th>
              )
            )}
            {hasActionMenu && <th />}
          </tr>
        </thead>
        <tbody>
          {validValues.map(row => (
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
                  <ActionsMenu
                    actions={actions}
                    data={row}
                    dataTestId={actionMenuTestId}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Styles.Table>
    </Styles.TableWrapper>
  );
};

export default Table;
