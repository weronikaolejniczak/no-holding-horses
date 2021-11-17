import { createSelector } from 'reselect';

import { RootState } from 'redux/store';
import { IParticipant } from 'interfaces/IParticipant';

const selectParticipants = (state: RootState) => state.participants;

const selectParticipantsData = createSelector(
  selectParticipants,
  (participants) => participants.data,
);

export const selectParticipantsWithIds = (participantIds: number[]) =>
  createSelector(selectParticipantsData, (participants) =>
    participants.filter((participant: IParticipant) =>
      participantIds.includes(participant.id),
    ),
  );
