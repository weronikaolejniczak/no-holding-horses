import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRacesRequest } from 'redux/races/actions/getRaces';
import { RacesList } from 'components/RacesList';

export const Races = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRacesRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Races</h1>
      <RacesList />
    </div>
  );
};
