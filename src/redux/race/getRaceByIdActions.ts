import axios from 'axios';

import { ERaceTypes } from 'redux/race/raceTypes';
import { AppDispatch } from 'redux/store';
import { IRace } from 'interfaces/IRace';

export const getRaceById = () => ({
  type: ERaceTypes.GET_RACE,
});

export const getRaceByIdSuccessfully = (response: IRace[]) => ({
  type: ERaceTypes.GET_RACE_SUCCESS,
  payload: response,
});

export const getRaceByIdUnsuccessfully = (error: string) => ({
  type: ERaceTypes.GET_RACE_FAILURE,
  error,
});

export const getRaceByIdRequest =
  (id: number) => async (dispatch: AppDispatch) => {
    dispatch(getRaceById());
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_RACES_API_URL}/races/${id}` ?? '',
      );
      dispatch(getRaceByIdSuccessfully(response.data));
    } catch ({ message }) {
      dispatch(getRaceByIdUnsuccessfully(message as string));
    }
  };
