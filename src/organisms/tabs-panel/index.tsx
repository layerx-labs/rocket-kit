import React from 'react';
// @ts-ignore
import Tabs from 'react-responsive-tabs';
import * as Styles from './styles';

export type Tab = {
  title: string;
  renderer: React.ReactNode;
};

export interface TabsPanelProps {
  unmountOnExit?: boolean;
  selectedTabKey?: number;
  beforeChange?: () => {};
  onChange?: () => {};
  tabs: Tab[];
}

const TabsPanel = (props: TabsPanelProps) => {
  const {
    unmountOnExit = true,
    selectedTabKey = 0,
    beforeChange,
    onChange,
    tabs,
  } = props;

  const getTabs = () => {
    return tabs.map((tab, index) => ({
      key: index,
      tabClassName: 'tab',
      panelClassName: 'panel',
      title: tab.title,
      getContent: () => tab.renderer,
    }));
  };

  return (
    <Styles.Wrapper>
      <Tabs
        transform={false}
        unmountOnExit={unmountOnExit}
        selectedTabKey={selectedTabKey}
        beforeChange={beforeChange}
        onChange={onChange}
        items={getTabs()}
      />
    </Styles.Wrapper>
  );
};

export default TabsPanel;
