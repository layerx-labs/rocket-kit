import React, { CSSProperties, useState, useEffect } from 'react';
import clsx from 'clsx';
import throttle from 'lodash.throttle';
import ReactDOM from 'react-dom';
import { Button, ModalFooter } from '../..';
import styles from './styles.module.css';

export interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  title: string;
  children: React.ReactNode;
  closeValue?: string;
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

  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const modalHeight: HTMLElement | null = document.querySelector(
        'div.modal'
      );

      modalHeight && modalHeight.offsetHeight + 60 > window.innerHeight
        ? setOverflow(true)
        : setOverflow(false);

      const resizeWindow = throttle(function() {
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

  const cssVars = {
    '--modalZIndex': zIndex,
  } as CSSProperties & Record<string, number>;

  return isShowing ? (
    ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.modalOverlay} style={cssVars} />
        <div
          className={clsx(styles.modalWrapper, overflow && styles.hasOverflow)}
          aria-modal
          tabIndex={-1}
          role="dialog"
          style={cssVars}
        >
          <div
            className={clsx(styles.modalContainer, 'modal')}
            onClick={event => event.stopPropagation()}
            style={cssVars}
          >
            <div className={styles.modalHeader}>
              {title && <h2>{title}</h2>}

              <Button
                color="white"
                txtColor="grey300"
                icon="cross"
                ariaLabel="Close"
                action={hide}
                rounded
              />
            </div>

            {children}

            {footer && (
              <ModalFooter closeAction={hide} closeValue={closeValue} />
            )}
          </div>
        </div>
      </React.Fragment>,
      document.body
    )
  ) : (
    <></>
  );
};

export default Modal;
