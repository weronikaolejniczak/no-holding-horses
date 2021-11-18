import { createSelector } from 'reselect';
import map from 'lodash.map';

import { RootState } from 'redux/store';

const selectBets = (state: RootState) => state.bets;

export const selectBetsArray = createSelector(selectBets, (bets) =>
  map(bets, (value, UID) => ({ name: UID, ...value })),
);
