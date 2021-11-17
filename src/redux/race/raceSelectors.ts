import { createSelector } from 'reselect';

import { RootState } from 'redux/store';
import { IRace } from 'interfaces/IRace'; // TODO: fix type cast

export const selectRace = (state: RootState) => state.race;

// TODO: fix participants error
export const selectRaceParticipants = createSelector(
  selectRace,
  (race) => (race as IRace).participants,
);
