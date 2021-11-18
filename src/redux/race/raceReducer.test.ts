import { raceReducer } from 'redux/race/raceReducer';
import {
  getRaceById,
  getRaceByIdSuccessfully,
  getRaceByIdUnsuccessfully,
} from 'redux/race/getRaceByIdActions';
import { clearRace } from 'redux/race/clearRaceActions';

describe('raceReducer', () => {
  it('should set isLoading to true, when it handles GET_RACE', () => {
    const mockInitialState = {
      data: {},
      isLoading: false,
    };
    const mockAction = getRaceById();
    const mockResultState = {
      data: {},
      isLoading: true,
    };
    expect(raceReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });

  it('should set isLoading to false and set data to response, when it handles GET_RACE_SUCCESS', () => {
    const mockInitialState = {
      data: {},
      isLoading: true,
    };
    const mockAction = getRaceByIdSuccessfully({
      id: 1,
      name: 'Orlando',
      active: true,
      participants: [1, 4, 6],
    });
    const mockResultState = {
      data: { id: 1, name: 'Orlando', active: true, participants: [1, 4, 6] },
      isLoading: false,
    };
    expect(raceReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });

  it('should set isLoading to false and set data to empty object, when it handles GET_RACE_FAILURE', () => {
    const mockInitialState = {
      data: {
        id: 1,
        name: 'Orlando',
        active: true,
        participants: [1, 4, 6],
      },
      isLoading: true,
    };
    const mockAction = getRaceByIdUnsuccessfully('Oops, something went wrong!');
    const mockResultState = {
      data: {},
      isLoading: false,
    };
    expect(raceReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });

  it('should set data to empty object, when it handles CLEAR_RACE', () => {
    const mockInitialState = {
      data: {
        id: 1,
        name: 'Orlando',
        active: true,
        participants: [1, 4, 6],
      },
      isLoading: true,
    };
    const mockAction = clearRace();
    const mockResultState = {
      data: {},
      isLoading: true,
    };
    expect(raceReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });
});
