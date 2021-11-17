import produce from 'immer';

import { ERacesTypes } from 'redux/races/racesTypes';
import { IRace } from 'interfaces/IRace';

export type RacesStateType = IRace[];

const initialState: RacesStateType = [];

export const racesReducer = produce((draftState, action) => {
  switch (action.type) {
    case ERacesTypes.GET_RACES_SUCCESS:
      return (draftState = action.payload);
  }
}, initialState);
