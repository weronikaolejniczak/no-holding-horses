import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRacesRequest } from 'redux/races/getRacesActions';
import { selectRacesIsLoading } from 'redux/races/racesSelectors';
import { RacesList } from 'components/RacesList';
import { RacesListSkeleton } from 'components/RacesListSkeleton';

export const Races = () => {
  const dispatch = useDispatch();
  const isRacesLoading = useSelector(selectRacesIsLoading);

  useEffect(() => {
    dispatch(getRacesRequest());
  }, [dispatch]);

  return (
    <section
      style={{
        padding: 10,
        paddingBottom: 70,
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <h2>Races</h2>
      {isRacesLoading ? <RacesListSkeleton /> : <RacesList />}
    </section>
  );
};
