import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRacesRequest } from 'redux/races/actions/getRaces';
import { RacesList } from 'components/RacesList';
import styles from 'pages/Races.module.css';

export const Races = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRacesRequest());
  }, [dispatch]);

  return (
    <div className={styles.races}>
      <h1>Races</h1>
      <RacesList />
    </div>
  );
};
