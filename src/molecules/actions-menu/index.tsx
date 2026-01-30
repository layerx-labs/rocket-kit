import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';
import { ActionMenu } from './types';
import styles from './styles.module.css';

export interface ActionsMenuListInterface<T> {
  actions: ActionMenu<T>[];
  data?: any;
  rowIndex?: number;
  handleOptionClick?: () => void;
}

export interface ActionsMenuInterface<T> {
  className?: string;
  ariaLabel?: string;
  actions: ActionMenu<T>[];
  data?: T;
  dataTestId?: string;
  startsOpen?: boolean;
}

export const ActionMenuList = <T,>(props: ActionsMenuListInterface<T>) => {
  const { actions = [], data = null, rowIndex, handleOptionClick } = props;

  if (!actions || !Array.isArray(actions) || actions.length === 0) return <></>;

  const visibleActions = actions.filter(({ visibilityFunc = null }) =>
    data && visibilityFunc ? visibilityFunc(data) : true
  );

  if (visibleActions.length === 0) return <></>;

  const listStyle =
    rowIndex !== undefined
      ? ({
          '--rowIndexMargin': `calc(2.8125rem + 3.125rem * ${rowIndex} + 2.625rem)`,
        } as CSSProperties & Record<string, string>)
      : undefined;

  return (
    <ul
      className={clsx(styles.list, rowIndex !== undefined && styles.hasRowIndex)}
      style={listStyle}
      data-testid="ul-action-menu"
    >
      {visibleActions.map(
        ({ id = '', type = '', url = '', action = () => {}, value = '' }) => (
          <li
            key={id}
            data-testid={'li-action-menu'}
            className={type ?? undefined}
          >
            <a
              href={url}
              onClick={e => {
                if (handleOptionClick) handleOptionClick();
                action(e, data);
                e.stopPropagation();
              }}
            >
              <span>{value}</span>
            </a>
          </li>
        )
      )}
    </ul>
  );
};

const ActionsMenu = <T,>(props: ActionsMenuInterface<T>) => {
  const {
    ariaLabel = '',
    actions = [],
    data,
    dataTestId = 'action-menu-button',
    startsOpen = false,
  } = props;

  const { ref, isVisible, setIsVisible } =
    useVisible<HTMLDivElement>(startsOpen);

  return (
    <div className={styles.actionsMenu} ref={ref}>
      <Button
        variant="text"
        color="dark"
        icon="menuVert"
        ariaLabel={ariaLabel}
        action={evt => {
          evt.preventDefault();
          setIsVisible(!isVisible);
          evt.stopPropagation();
        }}
        dataTestId={dataTestId}
      />

      {isVisible ? (
        <ActionMenuList
          actions={actions}
          data={data}
          handleOptionClick={() => {
            setIsVisible(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default ActionsMenu;
