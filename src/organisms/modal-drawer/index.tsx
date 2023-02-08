import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalFooter } from '../..';
import * as Styles from './styles';

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
            <Styles.ModalHeader>{title && <h2>{title}</h2>}</Styles.ModalHeader>
            <Styles.ModalContent>{children}</Styles.ModalContent>

            {!footerHidden &&
              (footer ? (
                footer
              ) : (
                <ModalFooter closeAction={hide} closeValue={closeValue} />
              ))}
          </Styles.ModalContainer>
        </Styles.ModalWrapper>
      </React.Fragment>,
      document.body
    )
  ) : (
    <></>
  );
};

export default ModalDrawer;
