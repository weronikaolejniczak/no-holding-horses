import { BetsList } from 'components/BetsList';

export const Bets = () => {
  return (
    <section
      style={{
        padding: 10,
        paddingBottom: 70,
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <h2>My bets</h2>
      <BetsList />
    </section>
  );
};
