import axios from 'axios';

import { ERacesTypes } from '../racesTypes';
import { AppDispatch } from '../../store';
import { IRace } from '../racesReducer';

const getRaces = () => ({
  type: ERacesTypes.GET_RACES,
});

const getRacesSuccessfully = (response: IRace[]) => ({
  type: ERacesTypes.GET_RACES_SUCCESS,
  payload: response,
});

const getRacesUnsuccessfully = (error: unknown) => ({
  type: ERacesTypes.GET_RACES_FAILURE,
  error,
});

export const getRacesRequest = () => async (dispatch: AppDispatch) => {
  dispatch(getRaces());
  try {
    const response = await axios.get(process.env.REACT_APP_RACES_API_URL ?? '');
    dispatch(getRacesSuccessfully(response.data));
  } catch ({ message }) {
    dispatch(getRacesUnsuccessfully(message));
  }
};
