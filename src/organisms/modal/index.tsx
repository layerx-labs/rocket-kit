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
  focus?: boolean;
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
    focus = false,
    zIndex = 10,
  } = props;

  return isShowing ? (
    ReactDOM.createPortal(
      <React.Fragment>
        <Styles.ModalOverlay zIndex={zIndex} />
        <Styles.ModalWrapper
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
          zIndex={zIndex}
        >
          <Styles.ModalContainer
            className={focus ? 'focus' : ''}
            onClick={event => event.stopPropagation()}
            zIndex={zIndex}
          >
            {!focus && (
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
            )}

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
