import React from 'react';
import * as Styles from './styles';

export interface GridContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const TabsPanel = (props: GridContainerProps) => {
  const { className = 'grid-container', children } = props;
  return <Styles.Wrapper className={className}>{children}</Styles.Wrapper>;
};

export default TabsPanel;
