import { produce } from 'immer';

import { ERaceTypes } from 'redux/race/raceTypes';
import { IRace } from 'interfaces/IRace';

export type RaceStateType = {
  data: Partial<IRace>;
  isLoading: boolean;
};

const initialState: RaceStateType = {
  data: {},
  isLoading: false,
};

export const raceReducer = produce((draftState, { type, error, payload }) => {
  switch (type) {
    case ERaceTypes.GET_RACE:
      draftState.isLoading = true;
      break;
    case ERaceTypes.GET_RACE_SUCCESS:
      draftState.isLoading = false;
      draftState.data = payload;
      break;
    case ERaceTypes.GET_RACE_FAILURE:
      draftState.isLoading = false;
      draftState.data = {};
      break;
    case ERaceTypes.CLEAR_RACE:
      draftState.data = {};
      break;
  }
}, initialState);
