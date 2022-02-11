import React from 'react';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';
import { ActionMenu } from './types';
import * as Styles from './styles';

interface ActionsMenuListInterface<T> {
  actions: ActionMenu<T>[];
  data?: any;
  rowIndex?: number;
  handleOptionClick?: () => void;
}

interface ActionsMenuInterface<T> {
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

  return (
    <Styles.List rowIndex={rowIndex} data-testid="ul-action-menu">
      {visibleActions.map(
        ({ id = '', type = '', url = '', action = () => {}, value = '' }) => (
          <li
            key={id}
            data-testid={'li-action-menu'}
            className={type === 'red' ? 'red' : undefined}
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
    </Styles.List>
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
    <Styles.ActionsMenuStyle ref={ref}>
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
    </Styles.ActionsMenuStyle>
  );
};

export default ActionsMenu;
