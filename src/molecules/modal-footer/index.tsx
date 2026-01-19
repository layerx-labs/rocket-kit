import React from 'react';
import clsx from 'clsx';
import { Button } from '../..';
import styles from './styles.module.css';

export interface ModalFooterProps {
  children?: React.ReactNode;
  closeAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  closeValue?: string;
  dataTestId?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ModalFooter = (props: ModalFooterProps) => {
  const {
    children,
    closeAction,
    closeValue = 'Close',
    dataTestId,
    className,
    style,
  } = props;

  return (
    <div
      className={clsx(styles.footer, className)}
      data-testid={dataTestId}
      style={style}
    >
      <Button
        variant="outline"
        color="grey300"
        action={closeAction}
        value={closeValue}
      />
      {children}
    </div>
  );
};

export default ModalFooter;
