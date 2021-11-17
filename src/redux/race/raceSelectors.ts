import { createSelector } from 'reselect';

import { RootState } from 'redux/store';

const selectRace = (state: RootState) => state.race;

export const selectRaceData = createSelector(selectRace, (race) => race.data);

export const selectRaceIsLoading = createSelector(
  selectRace,
  (race) => race.isLoading,
);

export const selectRaceDataParticipants = createSelector(
  selectRaceData,
  (data) => data?.participants,
);
