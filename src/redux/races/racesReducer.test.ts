import { racesReducer } from 'redux/races/racesReducer';
import {
  getRaces,
  getRacesSuccessfully,
  getRacesUnsuccessfully,
} from 'redux/races/getRacesActions';

describe('racesReducer', () => {
  it('should set isLoading to true, when it handles GET_RACES', () => {
    const mockInitialState = {
      data: [],
      isLoading: false,
    };
    const mockAction = getRaces();
    const mockResultState = {
      data: [],
      isLoading: true,
    };
    expect(racesReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });

  it('should set isLoading to false and set data to response, when it handles GET_RACES_SUCCESS', () => {
    const mockInitialState = {
      data: [],
      isLoading: true,
    };
    const mockAction = getRacesSuccessfully([]);
    const mockResultState = {
      data: [
        {
          id: 1,
          name: 'Wisconsin race',
          active: true,
          participants: [1, 5],
        },
        {
          id: 2,
          name: 'Tahoma race',
          active: false,
          participants: [1, 3, 5],
        },
      ],
      isLoading: false,
    };
    expect(racesReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });

  it('should set isLoading to false and set data to empty array, when it handles GET_RACES_FAILURE', () => {
    const mockInitialState = {
      data: [
        {
          id: 1,
          name: 'Wisconsin race',
          active: true,
          participants: [1, 5],
        },
        {
          id: 2,
          name: 'Tahoma race',
          active: false,
          participants: [1, 3, 5],
        },
      ],
      isLoading: true,
    };
    const mockAction = getRacesUnsuccessfully('Oops, something went wrong!');
    const mockResultState = {
      data: [],
      isLoading: false,
    };
    expect(racesReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });
});
