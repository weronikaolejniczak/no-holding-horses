import { produce } from 'immer';

import { ERaceTypes } from 'redux/race/raceTypes';
import { IRace } from 'interfaces/IRace';

const initialState: IRace = {
  id: null,
  name: '',
  active: false,
  participants: [],
};

export const raceReducer = produce((draftState, { type, payload }) => {
  switch (type) {
    case ERaceTypes.GET_RACE_SUCCESS:
      return (draftState = payload);
  }
}, initialState);
