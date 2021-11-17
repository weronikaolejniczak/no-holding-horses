import axios from 'axios';

import { ERaceTypes } from 'redux/race/raceTypes';
import { AppDispatch } from 'redux/store';
import { IRace } from 'interfaces/IRace';

const getRaceById = () => ({
  type: ERaceTypes.GET_RACE,
});

const getRaceByIdSuccessfully = (response: IRace[]) => ({
  type: ERaceTypes.GET_RACE_SUCCESS,
  payload: response,
});

const getRaceByIdUnsuccessfully = (error: string) => ({
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
