import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ParticipantsTable } from 'components/ParticipantsTable';
import { BetFormActions } from 'components/BetFormActions';
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
  const [error, setError] = useState('');

  const validateForm = () =>
    betAmount && bets.winner && bets.secondPlace && bets.thirdPlace;

  const resetForm = () => {
    setError('');
    setBetAmount('');
    setBets(initialBets);
  };

  const handleOnSubmit = () => {
    const isDataValid = validateForm();
    if (isDataValid) {
      setError('');
      resetForm();
      dispatch(saveAndHydrateBets(race, Number(betAmount), bets));
    } else {
      setError('Choose a winner, 2nd and 3rd place, and enter the bet amount!');
    }
  };

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
      <BetFormActions
        error={error}
        handleOnSubmit={handleOnSubmit}
        resetForm={resetForm}
      />
    </div>
  );
};
