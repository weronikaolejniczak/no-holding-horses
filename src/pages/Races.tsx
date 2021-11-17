import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRacesRequest } from '../redux/races/actions/getRaces';
import { ListOfRaces } from '../components/ListOfRaces';

export const Races = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRacesRequest());
  }, []);

  return (
    <div>
      <h1>Races</h1>
      <ListOfRaces />
    </div>
  );
};
