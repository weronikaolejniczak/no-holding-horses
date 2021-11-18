import { ReactComponent as Horse } from 'assets/horse.svg';

export const Home = () => {
  return (
    <section
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 70,
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <Horse width={300} height={400} fill="#1976d2" />
      <h2>There's no time for horsing around!</h2>
      <h1>
        <span>Place your bet </span>
        <span style={{ color: '#1976d2', textDecoration: 'underline' }}>
          now
        </span>
        !
      </h1>
    </section>
  );
};
