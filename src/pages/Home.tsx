import styles from 'pages/Home.module.css';
import { ReactComponent as Horse } from 'assets/horse.svg';

export const Home = () => {
  return (
    <section className={styles.home}>
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
