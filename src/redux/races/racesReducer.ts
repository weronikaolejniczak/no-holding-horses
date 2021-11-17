import produce from 'immer';

import { ERacesTypes } from './racesTypes';

export interface IRace {
  id: number;
  name: string;
  active: boolean;
  participants: number[];
}

export type RacesStateType = IRace[];

const initialState: RacesStateType = [];

export const racesReducer = produce((draftState, action) => {
  switch (action.type) {
    case ERacesTypes.GET_RACES_SUCCESS:
      return (draftState = action.payload);
  }
}, initialState);
