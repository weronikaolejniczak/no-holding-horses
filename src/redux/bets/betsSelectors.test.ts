import { selectBetsArray } from 'redux/bets/betsSelectors';

describe('racesSelectors', () => {
  describe('selectBetsArray', () => {
    it('should return an array of objects, when it receives object with objects', () => {
      const mockState = {
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
      const mockArray = [
        {
          name: 'Magnificence Race',
          betAmount: 500,
          bets: {
            winner: 'Magnificent Beast',
            secondPlace: 'Night Ranger',
            thirdPlace: 'Tronto',
          },
        },
        {
          name: 'Idaho a Go-Go Race',
          betAmount: 320,
          bets: {
            winner: 'The Boulder Mobile',
            secondPlace: 'The Convert-A-Car',
            thirdPlace: 'The Buzzwagon',
          },
        },
      ];
      expect(selectBetsArray.resultFunc(mockState)).toEqual(mockArray);
    });
  });
});
