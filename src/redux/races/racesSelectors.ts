import { createSelector } from 'reselect';

import { RootState } from 'redux/store';

const selectRaces = (state: RootState) => state.races;

export const selectRacesData = createSelector(
  selectRaces,
  (races) => races.data,
);

export const selectRacesIsLoading = createSelector(
  selectRaces,
  (races) => races.isLoading,
);
