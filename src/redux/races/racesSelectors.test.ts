import {
  selectRacesData,
  selectRacesIsLoading,
} from 'redux/races/racesSelectors';

describe('racesSelectors', () => {
  describe('selectRacesIsLoading', () => {
    it('should return true, when isLoading is true', () => {
      const mockState = {
        data: [],
        isLoading: true,
      };
      expect(selectRacesIsLoading.resultFunc(mockState)).toBe(true);
    });

    it('should return false, when isLoading is false', () => {
      const mockState = {
        data: [],
        isLoading: false,
      };
      expect(selectRacesIsLoading.resultFunc(mockState)).toBe(false);
    });
  });

  describe('selectRacesData', () => {
    it('should return data', () => {
      const mockState = {
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
      expect(selectRacesData.resultFunc(mockState)).toEqual([
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
      ]);
    });
  });
});
