import Tab from '@mui/material/Tab';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { ENavigationTabs } from 'enums/ENavigationTabs';

interface ILinkTabProps {
  href: ENavigationTabs;
}

export const LinkTab: FunctionComponent<ILinkTabProps> = ({
  children,
  href,
  ...props
}) => (
  <Link to={href}>
    <Tab component="a" {...props} />
  </Link>
);
