import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import throttle from 'lodash.throttle';

import { ParticipantsTable } from 'components/ParticipantsTable';
import { saveAndHydrateBets } from 'redux/bets/betsActions';
import { useInput } from 'hooks/useInput';

interface IBetFormProps {
  race: string | undefined;
}

export const BetForm = ({ race = '' }: IBetFormProps) => {
  const dispatch = useDispatch();

  const initialBets = {
    winner: '',
    secondPlace: '',
    thirdPlace: '',
  };
  const [betAmount, handleBetAmountOnChange, setBetAmount] = useInput('');
  const [bets, setBets] = useState(initialBets);

  const resetForm = () => {
    setBetAmount('');
    setBets(initialBets);
  };

  const handleOnSubmit = () => {
    resetForm();
    dispatch(saveAndHydrateBets(race, Number(betAmount), bets));
  };

  const throttledSubmit = throttle(handleOnSubmit, 1000);

  return (
    <div className="bet-form">
      <TextField
        label="Bet amount"
        color="primary"
        value={betAmount}
        onChange={handleBetAmountOnChange}
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
        <Button variant="contained" onClick={throttledSubmit}>
          Place bet
        </Button>
      </div>
    </div>
  );
};
