import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

import { ENavigationTabs } from '../../enums/ENavigationTabs';
import { LinkTab } from './LinkTab';

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState(ENavigationTabs.home);

  const handleOnChange = (event: Event, newActiveTab: ENavigationTabs) =>
    setActiveTab(newActiveTab);

  return (
    <Tabs
      value={activeTab}
      onChange={handleOnChange}
      aria-label="nav tabs example"
    >
      <LinkTab to={ENavigationTabs.home}>Home</LinkTab>
      <LinkTab to={ENavigationTabs.races}>Races</LinkTab>
    </Tabs>
  );
};
