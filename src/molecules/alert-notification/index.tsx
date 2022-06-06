import React, { CSSProperties } from 'react';
import Button from '../../atoms/button';
import * as Styles from './styles';

export interface AlertNotificationProps {
  className?: string;
  style?: CSSProperties;
  variant?: 'success' | 'orange' | 'red';
  value: string;
  children?: React.ReactNode;
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
  } = props;

  return (
    <Styles.Wrapper className={className} variant={variant}>
      <div>{value ? <span>{value}</span> : children}</div>
      <Button variant="text" icon="cross" action={closeAction} />
    </Styles.Wrapper>
  );
};

export default AlertNotification;
