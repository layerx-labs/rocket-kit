import React, { CSSProperties, useRef, useState } from 'react';
import clsx from 'clsx';
import { Button, EmptyTable, Icon } from '../..';
import { hasValue } from '../../utils/filters/has-value';
import { ActionMenu } from '../actions-menu/types';
import { colors } from '../../ions/variables';
import { ActionMenuList } from '../actions-menu';
import useVisible from '../../utils/hooks/use-visible';
import styles from './styles.module.css';
import tableStyles from '../table/styles.module.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
  onChange?: any;
  startsOpen?: boolean;
}

export interface CellBaseType {
  id: string;
}

const TableDnD = <CellData extends CellBaseType>(
  props: TableProps<CellData>
) => {
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
    onChange,
    startsOpen = false,
  } = props;

  const { ref, isVisible, setIsVisible } = useVisible<HTMLDivElement>(
    startsOpen
  );

  const [draggableId, setDraggableId] = useState('');
  const [rowData, setRowData] = useState({});
  const [rowIndex, setRowIndex] = useState<number | undefined>(undefined);
  const [columnWidths, setColumnWidths] = useState<number[]>([]);
  const tableRef = useRef<HTMLTableElement>(null);

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

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result.map((dragItem: any, index) => {
      dragItem.order = index;
      return dragItem;
    });
  };

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    ...draggableStyle,
    userSelect: 'none',
    backgroundColor: isDragging ? colors.white : 'transparent',
  });

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? colors.white : 'transparent',
  });

  const tableStyle = {
    '--tableLayout': 'auto',
    ...style,
  } as CSSProperties & Record<string, string>;

  return (
    // @ts-expect-error react-beautiful-dnd types are incompatible with React 18
    <DragDropContext
      onBeforeDragStart={result => {
        setDraggableId(result.draggableId);
        // Capture column widths from the row being dragged
        if (tableRef.current) {
          const row = tableRef.current.querySelector(
            `tr[data-rbd-draggable-id="${result.draggableId}"]`
          );
          if (row) {
            const cells = row.querySelectorAll('td');
            const widths = Array.from(cells).map(cell => cell.offsetWidth);
            setColumnWidths(widths);
          }
        }
      }}
      onDragEnd={result => {
        setDraggableId('');
        setColumnWidths([]);
        if (!result.destination) {
          return;
        }
        const newValues = reorder(
          values,
          result.source.index,
          result.destination.index
        );
        onChange(newValues);
      }}
    >
      <div className={tableStyles.tableWrapper}>
        <div className={tableStyles.overflowWrapper}>
          <table
            ref={tableRef}
            className={clsx(
              styles.table,
              border && styles.hasBorder,
              className
            )}
            data-testid={dataTestId}
            style={tableStyle}
          >
            <thead>
              <tr>
                <th className="thin" />
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
              </tr>
            </thead>
            {/* @ts-expect-error react-beautiful-dnd types are incompatible with React 18 */}
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <tbody
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  <>
                  {validValues.map((row, index) => (
                    // @ts-expect-error react-beautiful-dnd types are incompatible with React 18
                    <Draggable
                      key={row.id}
                      draggableId={row.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <tr
                          ref={provided.innerRef}
                          key={row.id}
                          data-testid={`row-${dataTestId}`}
                          {...provided.draggableProps}
                          className={clsx(
                            styles.tableRow,
                            draggableId === row.id && styles.isDragging
                          )}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <td
                            className="thin drag-handle"
                            style={
                              snapshot.isDragging && columnWidths[0]
                                ? { width: columnWidths[0] }
                                : undefined
                            }
                          >
                            <div {...provided.dragHandleProps}>
                              <Icon icon="drag-handle" />
                            </div>
                          </td>
                          {columns.map(
                            (
                              {
                                id = '',
                                dataKey = '',
                                className = '',
                                value = '',
                                renderer = null,
                                dataTestId,
                              },
                              colIndex
                            ) => (
                              <td
                                key={id}
                                className={className}
                                data-label={value}
                                data-testid={`td-${dataTestId}`}
                                style={
                                  snapshot.isDragging &&
                                  columnWidths[colIndex + 1]
                                    ? { width: columnWidths[colIndex + 1] }
                                    : undefined
                                }
                              >
                                <div>
                                  {renderer
                                    ? renderer(row[dataKey as keyof CellData], row)
                                    : (row[dataKey as keyof CellData] as unknown as React.ReactNode)}
                                  {className === 'kai' && (
                                    <Icon icon="lx" fill="hsl(0, 0%, 16%)" />
                                  )}
                                </div>
                              </td>
                            )
                          )}

                          {hasActionMenu && (
                            <td
                              className="menu"
                              data-testid={menuDataTestId}
                              style={
                                snapshot.isDragging &&
                                columnWidths[columns.length + 1]
                                  ? { width: columnWidths[columns.length + 1] }
                                  : undefined
                              }
                            >
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  </>
                </tbody>
              )}
            </Droppable>
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
    </DragDropContext>
  );
};

export default TableDnD;
