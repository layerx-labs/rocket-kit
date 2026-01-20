import React from 'react';
// @ts-ignore
import Tabs from 'react-responsive-tabs';
import styles from './styles.module.css';

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
    <div className={styles.wrapper}>
      <Tabs
        transform={false}
        unmountOnExit={unmountOnExit}
        selectedTabKey={selectedTabKey}
        beforeChange={beforeChange}
        onChange={onChange}
        items={getTabs()}
      />
    </div>
  );
};

export default TabsPanel;
