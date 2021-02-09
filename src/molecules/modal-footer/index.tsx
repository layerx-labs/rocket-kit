import React from 'react';
import { Button } from '../..';
import * as Styles from './styles';

export interface ModalFooterProps {
  children?: React.ReactNode;
  closeAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  closeValue?: string;
  focusMode?: boolean;
  focusModeValue?: string;
  focusModeAction?: () => void;
  dataTestId?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ModalFooter = (props: ModalFooterProps) => {
  const {
    children,
    closeAction,
    closeValue = 'Close',
    focusMode = false,
    focusModeValue,
    focusModeAction,
    dataTestId,
    className = 'modal-footer',
    style,
  } = props;

  return (
    <Styles.FooterStyle
      className={className}
      focusMode={focusMode}
      data-testid={dataTestId}
      style={style}
    >
      {focusMode && (
        <Button
          className="focus"
          variant="outline"
          color="info"
          action={focusModeAction}
          value={focusModeValue}
        />
      )}

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
