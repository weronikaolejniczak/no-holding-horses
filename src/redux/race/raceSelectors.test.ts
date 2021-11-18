import {
  selectRaceIsLoading,
  selectRaceData,
  selectRaceDataParticipants,
} from 'redux/race/raceSelectors';

describe('raceSelectors', () => {
  describe('selectRaceIsLoading', () => {
    it('should return true, when isLoading is true', () => {
      const mockState = {
        data: {},
        isLoading: true,
      };
      expect(selectRaceIsLoading.resultFunc(mockState)).toBe(true);
    });

    it('should return false, when isLoading is false', () => {
      const mockState = {
        data: {},
        isLoading: false,
      };
      expect(selectRaceIsLoading.resultFunc(mockState)).toBe(false);
    });
  });

  describe('selectRaceData', () => {
    it('should return race details, when it the data is not an empty object', () => {
      const mockState = {
        data: {
          id: 1,
          name: 'Orlando',
          active: true,
          participants: [1, 4, 6],
        },
        isLoading: true,
      };
      expect(selectRaceData.resultFunc(mockState)).toEqual({
        id: 1,
        name: 'Orlando',
        active: true,
        participants: [1, 4, 6],
      });
    });

    describe('selectRaceDataParticipants', () => {
      it('should return an array of participants, when the data is not an empty object', () => {
        const mockState = {
          data: {
            id: 1,
            name: 'Orlando',
            active: true,
            participants: [1, 4, 6],
          },
          isLoading: true,
        };
        expect(
          selectRaceDataParticipants.resultFunc(
            selectRaceData.resultFunc(mockState),
          ),
        ).toEqual([1, 4, 6]);
      });

      it('should return an empty array, when data is an empty object', () => {
        expect(selectRaceDataParticipants.resultFunc({})).toEqual([]);
      });
    });
  });
});
