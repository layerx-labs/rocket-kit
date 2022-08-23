import React, { CSSProperties } from 'react';
import * as Styles from './styles';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';
import { ButtonColor, ButtonVariant } from '../button/types';
import { ActionMenu } from './types';

export interface ActionsMenuInterface<T> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  value: string;
  icon?: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  actions: ActionMenu<T>[];
  data?: T;
  dataTestId?: string;
  startsOpen?: boolean;
  disabled?: boolean;
}

const ButtonDropdown = <T,>(props: ActionsMenuInterface<T>) => {
  const {
    className = 'button-dropdown',
    variant = 'solid',
    color = 'green',
    value = '',
    icon = 'keyboardDown',
    ariaLabel = '',
    actions = [],
    data = null,
    dataTestId = 'action-button-dropdown',
    startsOpen = false,
    disabled = false,
  } = props;

  const { ref, isVisible, setIsVisible } =
    useVisible<HTMLDivElement>(startsOpen);

  if (!actions || !Array.isArray(actions) || actions.length === 0) return <></>;

  const visibleActions = actions.filter(({ visibilityFunc = null }) =>
    data && visibilityFunc ? visibilityFunc(data) : true
  );

  if (visibleActions.length === 0) return <></>;

  return (
    <Styles.ActionsMenuStyle
      className={className}
      visibleActions={visibleActions.length}
      ref={ref}
    >
      <Button
        variant={variant}
        color={color}
        value={value}
        icon={icon}
        iconPosition="right"
        ariaLabel={ariaLabel}
        action={evt => {
          evt.preventDefault();
          setIsVisible(!isVisible);
        }}
        dataTestId={dataTestId}
        disabled={disabled}
      />

      <ul data-testid={'ul-action-menu'} className={isVisible ? 'isOpen' : ''}>
        {visibleActions.map(
          ({ id = '', url = '', action = () => {}, value = '' }) => (
            <li key={id} data-testid={'li-action-menu'}>
              <a
                href={url}
                onClick={e => {
                  setIsVisible(false);
                  action(e, data);
                }}
              >
                <span>{value}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </Styles.ActionsMenuStyle>
  );
};

export default ButtonDropdown;
