import { Navigation } from 'components/Navigation';

// TODO: create breakpoint
export const Header = () => (
  <header
    style={{
      alignItems: 'center',
      backgroundColor: '#59BFFF',
      display: 'flex',
      padding: 10,
    }}
  >
    <h1 style={{ color: 'white', marginRight: 25 }}> No Holding Horses 🐎 </h1>
    <Navigation />
  </header>
);
