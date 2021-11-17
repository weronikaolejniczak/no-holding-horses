import { createSelector } from 'reselect';

import { RootState } from 'redux/store';
import { IParticipant } from 'interfaces/IParticipant';
import { ParticipantsStateType } from 'redux/participants/participantsReducer';

const selectParticipants = (state: RootState) => state.participants;

// TODO: fix type cast
export const selectParticipantsWithIds = (participantIds: number[]) =>
  createSelector(selectParticipants, (participants) =>
    (participants as ParticipantsStateType).filter((participant: IParticipant) =>
      participantIds.includes(participant.id),
    ),
  );
