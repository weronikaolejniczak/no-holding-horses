import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRacesRequest } from 'redux/races/getRacesActions';
import { RacesList } from 'components/RacesList';

export const Races = () => {
  const dispatch = useDispatch();

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
      <RacesList />
    </section>
  );
};
