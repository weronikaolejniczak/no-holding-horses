import { betsReducer } from 'redux/bets/betsReducer';
import { saveBets } from 'redux/bets/betsActions';

describe('betsReducer', () => {
  it('should return state with saved bet, when it handles SAVE_BETS', () => {
    const mockInitialState = {};
    const mockAction = saveBets('Magnificence Race', 500, {
      winner: 'Magnificent Beast',
      secondPlace: 'Night Ranger',
      thirdPlace: 'Tronto',
    });
    const mockResultState = {
      'Magnificence Race': {
        betAmount: 500,
        bets: {
          winner: 'Magnificent Beast',
          secondPlace: 'Night Ranger',
          thirdPlace: 'Tronto',
        },
      },
    };
    expect(betsReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });

  it('should update saved bet, when it handles SAVE_BETS', () => {
    const mockInitialState = {
      'Magnificence Race': {
        betAmount: 500,
        bets: {
          winner: 'Magnificent Beast',
          secondPlace: 'Night Ranger',
          thirdPlace: 'Tronto',
        },
      },
      'Idaho a Go-Go Race': {
        betAmount: 320,
        bets: {
          winner: 'The Boulder Mobile',
          secondPlace: 'The Convert-A-Car',
          thirdPlace: 'The Buzzwagon',
        },
      },
    };
    const mockAction = saveBets('Idaho a Go-Go Race', 300, {
      winner: 'The Boulder Mobile',
      secondPlace: 'The Buzzwagon',
      thirdPlace: 'The Convert-A-Car',
    });
    const mockResultState = {
      'Magnificence Race': {
        betAmount: 500,
        bets: {
          winner: 'Magnificent Beast',
          secondPlace: 'Night Ranger',
          thirdPlace: 'Tronto',
        },
      },
      'Idaho a Go-Go Race': {
        betAmount: 300,
        bets: {
          winner: 'The Boulder Mobile',
          secondPlace: 'The Buzzwagon',
          thirdPlace: 'The Convert-A-Car',
        },
      },
    };
    expect(betsReducer(mockInitialState, mockAction)).toEqual(mockResultState);
  });
});
