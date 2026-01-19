import React, { CSSProperties, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalFooter } from '../..';
import styles from './styles.module.css';

export interface ModalDrawerProps {
  isShowing: boolean;
  hide: () => void;
  title: string;
  children: React.ReactNode;
  closeValue?: string;
  footer?: React.ReactNode;
  footerHidden?: boolean;
  zIndex?: number;
}

const ModalDrawer = (props: ModalDrawerProps) => {
  const {
    isShowing = false,
    hide,
    title,
    children,
    closeValue = 'Close',
    footer = null,
    footerHidden = false,
    zIndex = 10,
  } = props;

  useEffect(() => {
    if (isShowing && typeof window !== 'undefined') {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isShowing]);

  useEffect(() => {
    const fixViewport = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    fixViewport();

    if (typeof window !== 'undefined') {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      window.addEventListener('resize', fixViewport);
      return () => window.removeEventListener('resize', fixViewport);
    }

    return;
  }, []);

  const cssVars = {
    '--modalZIndex': zIndex,
  } as CSSProperties & Record<string, number>;

  return isShowing ? (
    ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.modalOverlay} style={cssVars} />
        <div
          className={styles.modalWrapper}
          aria-modal
          tabIndex={-1}
          role="dialog"
          style={cssVars}
        >
          <div
            className={styles.modalContainer}
            onClick={event => event.stopPropagation()}
            style={cssVars}
          >
            <div className={styles.modalHeader}>
              {title && <h2>{title}</h2>}
            </div>
            <div className={styles.modalContent}>{children}</div>

            {!footerHidden &&
              (footer ? (
                footer
              ) : (
                <ModalFooter closeAction={hide} closeValue={closeValue} />
              ))}
          </div>
        </div>
      </React.Fragment>,
      document.body
    )
  ) : (
    <></>
  );
};

export default ModalDrawer;
