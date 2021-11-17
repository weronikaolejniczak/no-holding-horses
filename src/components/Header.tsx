import { Navigation } from 'components/Navigation';

// TODO: create breakpoint
export const Header = () => (
  <header
    style={{
      alignItems: 'center',
      backgroundColor: 'white',
      display: 'flex',
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
    }}
  >
    <h1 style={{ marginRight: 25 }}> No Holding Horses 🐎 </h1>
    <Navigation />
  </header>
);
