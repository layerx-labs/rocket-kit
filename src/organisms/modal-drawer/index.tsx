import React from 'react';
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
  footerHidden: boolean;
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

            {!footerHidden && footer ? (
              footer
            ) : (
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

export default ModalDrawer;
