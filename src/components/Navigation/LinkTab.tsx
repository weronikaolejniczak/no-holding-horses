import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import { FunctionComponent } from 'react';

import { ENavigationTabs } from '../../enums/ENavigationTabs';

interface ILinkTabProps {
  to: ENavigationTabs;
}

export const LinkTab: FunctionComponent<ILinkTabProps> = ({
  children,
  to,
  ...props
}) => {
  const handleOnClick = (event: { preventDefault: () => any }) =>
    event.preventDefault();

  return (
    <Link to={to}>
      <Tab component="a" onClick={handleOnClick} {...props} />
    </Link>
  );
};
