import {
  selectParticipantsIsLoading,
  selectParticipantsData,
  selectParticipantsWithIds,
} from 'redux/participants/participantsSelectors';

describe('participantsSelectors', () => {
  describe('selectParticipantsIsLoading', () => {
    it('should return true, when isLoading is true', () => {
      const mockState = {
        data: [],
        isLoading: true,
      };
      expect(selectParticipantsIsLoading.resultFunc(mockState)).toBe(true);
    });

    it('should return false, when isLoading is false', () => {
      const mockState = {
        data: [],
        isLoading: false,
      };
      expect(selectParticipantsIsLoading.resultFunc(mockState)).toBe(false);
    });
  });

  describe('selectParticipantsData', () => {
    const mockState = {
      data: [],
      isLoading: false,
    };
    it('should return an empty array, when there is no data', () => {
      expect(selectParticipantsData.resultFunc(mockState)).toEqual([]);
    });

    describe('selectParticipantsWithIds', () => {
      it('should return participants by ids, when there are participants with given ids', () => {
        const participantsIds = [1, 3];
        const mockState = {
          data: [
            { id: 1, body: 'Shadow' },
            { id: 2, body: 'Night Ranger' },
            { id: 3, body: 'Magnificent Beast' },
            { id: 4, body: 'Daredevil' },
          ],
          isLoading: false,
        };
        expect(
          selectParticipantsWithIds(participantsIds).resultFunc(
            selectParticipantsData(mockState),
          ),
        ).toEqual([
          { id: 1, body: 'Shadow' },
          { id: 3, body: 'Magnificent Beast' },
        ]);
      });

      it('should return an empty array, when there are no participants with given ids', () => {
        const participantsIds = [1, 3];
        const mockState = {
          data: [
            { id: 2, body: 'Night Ranger' },
            { id: 4, body: 'Daredevil' },
          ],
          isLoading: false,
        };
        expect(
          selectParticipantsWithIds(participantsIds).resultFunc(
            selectParticipantsData(mockState),
          ),
        ).toEqual([]);
      });
    });
  });
});
