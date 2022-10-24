import React, { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import ReactDOM from 'react-dom';
import { Button, ModalFooter } from '../..';
import * as Styles from './styles';

export interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  title: string;
  children: React.ReactNode;
  closeValue?: string;
  footer: boolean;
  zIndex?: number;
  dataTestId?: string;
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
    dataTestId,
  } = props;

  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const modalHeight: HTMLElement | null =
        document.querySelector('div.modal');

      modalHeight && modalHeight.offsetHeight + 60 > window.innerHeight
        ? setOverflow(true)
        : setOverflow(false);

      const resizeWindow = throttle(function () {
        modalHeight && modalHeight.offsetHeight + 60 > window.innerHeight
          ? setOverflow(true)
          : setOverflow(false);
      }, 200);

      window.addEventListener('resize', resizeWindow);
      return () => window.removeEventListener('resize', resizeWindow);
    } else {
      return;
    }
  }, []);

  return isShowing ? (
    ReactDOM.createPortal(
      <React.Fragment>
        <Styles.ModalOverlay zIndex={zIndex} />
        <Styles.ModalWrapper
          aria-modal
          tabIndex={-1}
          role="dialog"
          zIndex={zIndex}
          modalOverflow={overflow}
        >
          <Styles.ModalContainer
            onClick={event => event.stopPropagation()}
            zIndex={zIndex}
            className="modal"
          >
            <Styles.ModalHeader>
              {title && <h2>{title}</h2>}

              <Button
                color="white"
                txtColor="grey200"
                icon="cross"
                ariaLabel="Close"
                action={hide}
                rounded
              />
            </Styles.ModalHeader>

            {children}

            {footer && (
              <ModalFooter
                dataTestId={dataTestId?.concat('-footer')}
                closeAction={hide}
                closeValue={closeValue}
              />
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
