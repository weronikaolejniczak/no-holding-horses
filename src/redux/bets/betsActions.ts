import { EBetsTypes } from 'redux/bets/betsTypes';
import { IBets } from 'interfaces/IBets';
import { saveStateToLocalStorage } from 'helpers/saveStateToLocalStorage';
import { AppDispatch, RootState } from 'redux/store';

export const saveBets =
  (race: string, betAmount: number, bets: IBets) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    saveStateToLocalStorage({
      bets: {
        ...getState().bets,
        [race]: {
          betAmount,
          bets,
        },
      },
    });
    dispatch({
      type: EBetsTypes.SAVE_BETS,
      payload: {
        id: race,
        betAmount,
        bets,
      },
    });
  };
