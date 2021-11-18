import { EBetsTypes } from 'redux/bets/betsTypes';
import { IBets } from 'interfaces/IBets';

export const saveBets = (race: string, betAmount: number, bets: IBets) => ({
  type: EBetsTypes.SAVE_BETS,
  payload: {
    id: race,
    betAmount,
    bets,
  },
});

export const removeBet = (race: string) => ({
  type: EBetsTypes.REMOVE_BET,
  payload: race,
});

export const clearBets = () => ({
  type: EBetsTypes.CLEAR_BETS,
});
