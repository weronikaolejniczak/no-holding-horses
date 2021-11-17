import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

import { ENavigationTabs } from '../../enums/ENavigationTabs';
import { LinkTab } from './LinkTab';

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState(ENavigationTabs.HOME);

  const handleOnChange = (_: any, newActiveTab: ENavigationTabs) =>
    setActiveTab(newActiveTab);

  return (
    <Tabs
      value={activeTab}
      onChange={handleOnChange}
      aria-label="nav tabs example"
    >
      <LinkTab to={ENavigationTabs.HOME}>Home</LinkTab>
      <LinkTab to={ENavigationTabs.RACES}>Races</LinkTab>
    </Tabs>
  );
};
