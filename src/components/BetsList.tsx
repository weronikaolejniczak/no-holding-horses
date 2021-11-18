import { Card } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectBetsArray } from 'redux/bets/betsSelectors';

export const BetsList = () => {
  const bets = useSelector(selectBetsArray);

  return (
    <div className="bets-list">
      {bets.map(({ name, betAmount, bets }) => (
        <Card raised sx={{ padding: 2, margin: 2 }}>
          <h3>{name}</h3>
          <p>
            <span style={{ fontWeight: 'bold' }}>Bet amount:</span> {betAmount}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Winner:</span> {bets.winner}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>2nd place:</span>{' '}
            {bets.secondPlace}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>3rd place:</span>{' '}
            {bets.thirdPlace}
          </p>
        </Card>
      ))}
    </div>
  );
};
