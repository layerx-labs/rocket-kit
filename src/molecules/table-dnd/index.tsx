import React from 'react';
import { ActionsMenu, EmptyTable, Icon } from '../..';
import { hasValue } from '../../utils/filters/has-value';
import { ActionMenu } from '../actions-menu/types';
import { colors } from '../../ions/variables';
import * as Styles from './styles';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const { light } = colors;

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

  // const onBeforeDragStart = () => {
  //   this.setState({
  //     isDragging: true,
  //   });
  // };

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
    userSelect: 'none',
    background: isDragging ? light : 'transparent',
    width: '100%',
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? light : 'transparent',
  });

  return (
    <DragDropContext
      // onBeforeDragStart={onBeforeDragStart}
      onDragEnd={result => {
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
      <Styles.TableWrapper
        border={border}
        data-testid={dataTestId}
        className={className}
        style={style}
        layout="auto"
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
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <tbody
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {validValues.map((row, index) => (
                <Draggable
                  key={`${index}`}
                  draggableId={`${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <tr
                      key={row.id}
                      data-testid={`row-${dataTestId}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <td className="thin cenas">
                        <div {...provided.dragHandleProps}>
                          <Icon icon="drag-handle" />
                        </div>
                      </td>
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
                  )}
                </Draggable>
              ))}
            </tbody>
          )}
        </Droppable>
      </Styles.TableWrapper>
    </DragDropContext>
  );
};

export default TableDnD;
