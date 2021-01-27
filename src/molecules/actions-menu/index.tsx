import React, { CSSProperties } from 'react';
import * as Styles from './styles';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';
import { ActionMenu } from './types';

interface ActionsMenuInterface<T> {
  data?: T;
  actions: ActionMenu<T>[];
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  startsOpen?: boolean;
}

const ActionsMenu = <T,>(props: ActionsMenuInterface<T>) => {
  const {
    actions = [],
    data = null,
    dataTestId = 'action-menu-button',
    startsOpen = false,
  } = props;
  const { ref, isVisible, setIsVisible } = useVisible<HTMLDivElement>(
    startsOpen
  );

  if (!actions || !Array.isArray(actions) || actions.length === 0) return <></>;

  const visibleActions = actions.filter(({ visibilityFunc = null }) =>
    data && visibilityFunc ? visibilityFunc(data) : true
  );

  if (visibleActions.length === 0) return <></>;

  return (
    <Styles.ActionsMenuStyle ref={ref}>
      <Button
        variant="text"
        color="black"
        icon="menuVert"
        action={evt => {
          evt.preventDefault();
          setIsVisible(!isVisible);
        }}
        dataTestId={dataTestId}
      />

      {isVisible ? (
        <ul data-testid={'ul-action-menu'}>
          {visibleActions.map(
            ({
              id = '',
              type = '',
              url = '',
              action = () => {},
              value = '',
            }) => (
              <li
                key={id}
                data-testid={'li-action-menu'}
                className={type === 'danger' ? 'danger' : undefined}
              >
                <a
                  href={url}
                  onClick={e => {
                    setIsVisible(false);
                    action(e, data);
                  }}
                >
                  {value}
                </a>
              </li>
            )
          )}
        </ul>
      ) : null}
    </Styles.ActionsMenuStyle>
  );
};

export default ActionsMenu;
