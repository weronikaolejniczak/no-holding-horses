import { participantsReducer } from 'redux/participants/participantsReducer';
import {
  getParticipants,
  getParticipantsSuccessfully,
  getParticipantsUnsuccessfully,
} from 'redux/participants/getParticipantsActions';

describe('participantsReducer', () => {
  it('should set isLoading to true, when it handles GET_PARTICIPANTS', () => {
    const mockInitialState = {
      data: [],
      isLoading: false,
    };
    const mockAction = getParticipants();
    const mockResultState = {
      data: [],
      isLoading: true,
    };
    expect(participantsReducer(mockInitialState, mockAction)).toEqual(
      mockResultState,
    );
  });

  it('should set isLoading to false and set data to response, when it handles GET_PARTICIPANTS_SUCCESS', () => {
    const mockInitialState = {
      data: [],
      isLoading: true,
    };
    const mockAction = getParticipantsSuccessfully([
      { id: 1, body: 'Best champion!' },
    ]);
    const mockResultState = {
      data: [{ id: 1, body: 'Best champion!' }],
      isLoading: false,
    };
    expect(participantsReducer(mockInitialState, mockAction)).toEqual(
      mockResultState,
    );
  });

  it('should return set isLoading to false and set data to empty array, when it handles GET_PARTICIPANTS_FAILURE', () => {
    const mockInitialState = {
      data: [{ id: 1, body: 'Best champion!' }],
      isLoading: true,
    };
    const mockAction = getParticipantsUnsuccessfully(
      'Oops, something went wrong!',
    );
    const mockResultState = {
      data: [],
      isLoading: false,
    };
    expect(participantsReducer(mockInitialState, mockAction)).toEqual(
      mockResultState,
    );
  });
});
