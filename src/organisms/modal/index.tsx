import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ModalFooter } from '../..';
import * as Styles from './styles';

export interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  title: string;
  children: React.ReactNode;
  closeValue: string;
  footer: boolean;
  zIndex?: number;
}

const Modal = (props: ModalProps) => {
  const {
    isShowing = false,
    hide,
    title,
    children,
    closeValue = 'Close',
    footer = false,
    zIndex = 10,
  } = props;

  return isShowing ? (
    ReactDOM.createPortal(
      <React.Fragment>
        <Styles.ModalOverlay zIndex={zIndex} />
        <Styles.ModalWrapper
          aria-modal
          tabIndex={-1}
          role="dialog"
          zIndex={zIndex}
        >
          <Styles.ModalContainer
            onClick={event => event.stopPropagation()}
            zIndex={zIndex}
          >
            <Styles.ModalHeader>
              {title && <h2>{title}</h2>}

              <Button
                variant="outline"
                color="info"
                icon="cross"
                ariaLabel="Close"
                action={hide}
              />
            </Styles.ModalHeader>

            {children}

            {footer && (
              <ModalFooter closeAction={hide} closeValue={closeValue} />
            )}
          </Styles.ModalContainer>
        </Styles.ModalWrapper>
      </React.Fragment>,
      document.body
    )
  ) : (
    <></>
  );
};

export default Modal;
