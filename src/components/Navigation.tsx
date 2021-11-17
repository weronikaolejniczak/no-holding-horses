import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { ENavigationTabs } from 'enums/ENavigationTabs';

export const Navigation = () => {
  const { pathname } = useLocation();
  const currentTab = `/${pathname.split('/')[1]}`;

  return (
    <Tabs value={currentTab}>
      <Tab
        label="Home"
        value={ENavigationTabs.HOME}
        to={ENavigationTabs.HOME}
        component={Link}
      />
      <Tab
        label="Races"
        value={ENavigationTabs.RACES}
        to={ENavigationTabs.RACES}
        component={Link}
      />
    </Tabs>
  );
};
