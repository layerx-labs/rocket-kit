import React from 'react';
import { Button } from '../..';
import * as Styles from './styles';

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
    className = 'modal-footer',
    style,
  } = props;

  return (
    <Styles.FooterStyle
      className={className}
      data-testid={dataTestId}
      style={style}
    >
      <Button
        variant="outline"
        color="info"
        action={closeAction}
        value={closeValue}
      />
      {children}
    </Styles.FooterStyle>
  );
};

export default ModalFooter;
