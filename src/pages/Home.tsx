import { ReactComponent as Horse } from 'assets/horse.svg';
import { EColors } from 'constants/EColors';
import { ENavigationTabs } from 'enums/ENavigationTabs';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section
      style={{
        alignItems: 'center',
        display: 'flex',
        height: 'calc(100vh - 165px)',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 70,
      }}
    >
      <Horse width={320} height={350} fill={EColors.darkBackground} />
      <h3>There's no time for horsing around!</h3>
      <h1>
        <span>Place your bet </span>
        <Link to={ENavigationTabs.RACES}>NOW</Link>!
      </h1>
    </section>
  );
};
