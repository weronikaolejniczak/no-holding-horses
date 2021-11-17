import axios from 'axios';

import { ERacesTypes } from 'redux/races/racesTypes';
import { AppDispatch } from 'redux/store';
import { IRace } from 'interfaces/IRace';

const getRaces = () => ({
  type: ERacesTypes.GET_RACES,
});

const getRacesSuccessfully = (response: IRace[]) => ({
  type: ERacesTypes.GET_RACES_SUCCESS,
  payload: response,
});

const getRacesUnsuccessfully = (error: string) => ({
  type: ERacesTypes.GET_RACES_FAILURE,
  error,
});

export const getRacesRequest = () => async (dispatch: AppDispatch) => {
  dispatch(getRaces());
  try {
    const response = await axios.get(`${process.env.REACT_APP_RACES_API_URL}/races` ?? '');
    dispatch(getRacesSuccessfully(response.data));
  } catch ({ message }) {
    dispatch(getRacesUnsuccessfully(message as string));
  }
};
