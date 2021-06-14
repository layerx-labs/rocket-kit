import React from 'react';
import * as Styles from './styles';

// @ts-ignore
import IconLoginOnly from '../../ions/icon-login-only';
// @ts-ignore
import IconEmptyData from '../../ions/icon-empty-data';

export interface DataWarningProps {
  type?: 'login' | 'data';
  children: React.ReactNode;
}

const DataWarning = (props: DataWarningProps) => {
  let icon;
  const { type = 'login', children } = props;

  switch (type) {
    case 'login':
      icon = <IconLoginOnly />;
      break;
    case 'data':
      icon = <IconEmptyData />;
      break;
    default:
      icon = <IconLoginOnly />;
  }

  return (
    <Styles.Wrapper type={type}>
      {icon}
      <div>{children}</div>
    </Styles.Wrapper>
  );
};

export default DataWarning;
