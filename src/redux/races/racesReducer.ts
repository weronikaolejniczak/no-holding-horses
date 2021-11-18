import produce from 'immer';

import { ERacesTypes } from 'redux/races/racesTypes';
import { IRace } from 'interfaces/IRace';

export type RacesStateType = {
  data: IRace[];
  isLoading: boolean;
};

const initialState: RacesStateType = {
  data: [],
  isLoading: false,
};

export const racesReducer = produce((draftState, { type, payload }) => {
  switch (type) {
    case ERacesTypes.GET_RACES:
      draftState.isLoading = true;
      break;
    case ERacesTypes.GET_RACES_SUCCESS:
      draftState.isLoading = false;
      draftState.data = payload;
      break;
    case ERacesTypes.GET_RACES_FAILURE:
      draftState.isLoading = false;
      draftState.data = [];
      break;
  }
}, initialState);
