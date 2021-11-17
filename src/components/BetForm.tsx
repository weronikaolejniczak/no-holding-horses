import { Button, TextField } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';

import { ParticipantsTable } from 'components/ParticipantsTable';

export const BetForm = () => {
  const initialBets = {
    winner: '',
    secondPlace: '',
    thirdPlace: '',
  };
  const [betAmount, setBetAmount] = useState(''); // TODO: useInput hook
  const [bets, setBets] = useState(initialBets);

  const handleOnChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => setBetAmount(event.target.value);

  const resetForm = () => {
    setBetAmount('');
    setBets(initialBets);
  };

  const handleOnSubmit = () => {
    console.log('betAmount:', betAmount);
    console.log('bets:', bets);
  };

  return (
    <div className="bet-form">
      <TextField
        label="Bet amount"
        color="primary"
        value={betAmount}
        onChange={handleOnChange}
        type="number"
        required
        aria-required
        sx={{ marginBottom: 2 }}
      />
      <ParticipantsTable bets={bets} setBets={setBets} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          width: '100%',
        }}
      >
        <Button variant="text" sx={{ marginRight: 2 }} onClick={resetForm}>
          Reset form
        </Button>
        <Button variant="contained" onClick={handleOnSubmit}>
          Place bet
        </Button>
      </div>
    </div>
  );
};
