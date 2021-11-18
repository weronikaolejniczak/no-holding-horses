import { Navigation } from 'components/Navigation';
import { EColors } from 'constants/EColors';

// TODO: create breakpoint
export const Header = () => (
  <header
    style={{
      alignItems: 'center',
      backgroundColor: EColors.surface,
      display: 'flex',
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
    }}
  >
    <h3 style={{ marginRight: 25 }}> No Holding Horses 🐎 </h3>
    <Navigation />
  </header>
);
