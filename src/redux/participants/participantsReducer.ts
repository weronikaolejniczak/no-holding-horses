import produce from 'immer';

import { EParticipantsTypes } from 'redux/participants/participantsTypes';
import { IParticipant } from 'interfaces/IParticipant';

export type ParticipantsStateType = {
  data: IParticipant[];
  isLoading: boolean;
};

const initialState: ParticipantsStateType = {
  data: [],
  isLoading: false,
};

export const participantsReducer = produce((draftState, { type, error, payload }) => {
  switch (type) {
    case EParticipantsTypes.GET_PARTICIPANTS:
      draftState.isLoading = true;
      break;
    case EParticipantsTypes.GET_PARTICIPANTS_SUCCESS:
      draftState.isLoading = false;
      draftState.data = payload;
      break;
    case EParticipantsTypes.GET_PARTICIPANTS_FAILURE:
      draftState.isLoading = false;
      draftState.data = [];
      break;
  }
}, initialState);
