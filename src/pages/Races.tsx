import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getRacesRequest } from '../redux/races/actions/getRaces';
import { selectRaces } from '../redux/races/racesSelectors';
import { RacesStateType } from "../redux/races/racesReducer";

export const Races = () => {
  const dispatch = useDispatch();
  const races: RacesStateType = useSelector(selectRaces);

  useEffect(() => {
    dispatch(getRacesRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Races</h1>
      {races.map(({ id, name }) => <Link key={id} to={`/races/${id}`}>{name}</Link>)}
    </div>
  )
}
