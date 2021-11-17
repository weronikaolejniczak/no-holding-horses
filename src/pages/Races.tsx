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
    <section style={{ padding: 10 }}>
      <h2>Races</h2>
      <RacesList />
    </section>
  );
};
