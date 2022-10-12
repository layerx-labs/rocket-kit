import React, { CSSProperties } from 'react';
import * as Styles from './styles';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';
import { ButtonColor, ButtonVariant } from '../button/types';
import { ActionMenu } from './types';

export interface ActionsMenuInterface<T> {
  variant?: ButtonVariant;
  rounded?: boolean;
  color?: ButtonColor;
  txtColor?: ButtonColor;
  className?: string;
  style?: CSSProperties;
  actions: ActionMenu<T>[];
  value?: string;
  icon: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  dataTestId?: string;
  eventId?: string;
  data?: T;
  startsOpen?: boolean;
  disabled?: boolean;
}

const ButtonDropdown = <T,>(props: ActionsMenuInterface<T>) => {
  const {
    variant = 'solid',
    rounded = false,
    color = 'purple500',
    txtColor = 'white',
    className = 'button-dropdown',
    style,
    actions = [],
    value = '',
    icon = 'add',
    dataTestId = 'action-button-dropdown',
    eventId = '',
    ariaLabel = '',
    ariaHidden = false,
    data = null,
    startsOpen = false,
    disabled = false,
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
    <Styles.ActionsMenuStyle
      className={className}
      style={style}
      visibleActions={visibleActions.length}
      ref={ref}
    >
      <Button
        variant={variant}
        rounded={rounded}
        color={color}
        txtColor={txtColor}
        action={evt => {
          evt.preventDefault();
          setIsVisible(!isVisible);
        }}
        value={value}
        iconPosition="right"
        icon={icon}
        data-testid={dataTestId}
        data-event={eventId}
        ariaLabel={ariaLabel}
        aria-hidden={ariaHidden}
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
