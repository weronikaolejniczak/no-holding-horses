import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

import { ENavigationTabs } from 'enums/ENavigationTabs';
import { LinkTab } from 'components/Navigation/LinkTab';

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
      <LinkTab href={ENavigationTabs.HOME}>Home</LinkTab>
      <LinkTab href={ENavigationTabs.RACES}>Races</LinkTab>
    </Tabs>
  );
};
