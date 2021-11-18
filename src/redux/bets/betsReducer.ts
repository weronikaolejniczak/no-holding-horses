import produce from 'immer';

import { EBetsTypes } from 'redux/bets/betsTypes';
import { IBets } from 'interfaces/IBets';

export type BetsStateType = {
  [key: string]: { betAmount: number; bets: IBets };
};

const initialState: BetsStateType = {};

export const betsReducer = produce((draftState, { type, payload }) => {
  switch (type) {
    case EBetsTypes.SAVE_BETS:
      const { id, betAmount, bets } = payload;
      draftState[id] = { betAmount, bets };
      break;
    case EBetsTypes.REMOVE_BET:
      delete draftState[payload.id];
      break;
    case EBetsTypes.CLEAR_BETS:
      return (draftState = {});
  }
}, initialState);
