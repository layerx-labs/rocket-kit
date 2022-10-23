import React, { CSSProperties } from 'react';
import Button from '../../atoms/button';
import * as Styles from './styles';

export interface AlertNotificationProps {
  className?: string;
  style?: CSSProperties;
  variant?: 'success' | 'orange' | 'red';
  value: string;
  children?: React.ReactNode;
  dataTestId?: string;
  closeAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const AlertNotification = (props: AlertNotificationProps) => {
  const {
    className = 'alert-notification',
    variant = 'success',
    closeAction = () => {},
    value,
    children,
    dataTestId,
  } = props;

  return (
    <Styles.Wrapper
      data-testid={dataTestId}
      className={className}
      variant={variant}
    >
      <div>{value ? <span>{value}</span> : children}</div>
      <Button variant="text" icon="cross" action={closeAction} />
    </Styles.Wrapper>
  );
};

export default AlertNotification;
