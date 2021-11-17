import produce from 'immer';

import { EParticipantsTypes } from 'redux/participants/participantsTypes';
import { IParticipant } from 'interfaces/IParticipant';

export type ParticipantsStateType = IParticipant[];

const initialState: ParticipantsStateType = [];

export const participantsReducer = produce((draftState, action) => {
  switch (action.type) {
    case EParticipantsTypes.GET_PARTICIPANTS_SUCCESS:
      return (draftState = action.payload);
  }
}, initialState);
