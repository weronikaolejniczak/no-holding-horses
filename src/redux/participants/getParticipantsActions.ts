import axios from 'axios';

import { EParticipantsTypes } from 'redux/participants/participantsTypes';
import { AppDispatch } from 'redux/store';
import { IParticipant } from 'interfaces/IParticipant';

export const getParticipants = () => ({
  type: EParticipantsTypes.GET_PARTICIPANTS,
});

export const getParticipantsSuccessfully = (response: IParticipant[]) => ({
  type: EParticipantsTypes.GET_PARTICIPANTS_SUCCESS,
  payload: response,
});

export const getParticipantsUnsuccessfully = (error: string) => ({
  type: EParticipantsTypes.GET_PARTICIPANTS_FAILURE,
  error,
});

export const getParticipantsRequest = () => async (dispatch: AppDispatch) => {
  dispatch(getParticipants());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_RACES_API_URL}/participants` ?? '',
    );
    dispatch(getParticipantsSuccessfully(response.data));
  } catch ({ message }) {
    dispatch(getParticipantsUnsuccessfully(message as string));
  }
};
