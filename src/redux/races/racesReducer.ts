import produce from "immer";

import { ERacesTypes } from "./racesTypes";

export interface IRace {
  readonly id: number,
  readonly name: string,
  readonly active: boolean,
  readonly participants: number[]
}

export type RacesStateType = IRace[];

const initialState: RacesStateType = [];

export const racesReducer = produce((draftState, action) => {
  switch (action.type) {
    case ERacesTypes.GET_RACES_SUCCESS:
      return (draftState = action.payload);
  }
}, initialState);
