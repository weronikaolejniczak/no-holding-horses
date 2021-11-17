import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectRaces } from '../redux/races/racesSelectors';
import { RacesStateType } from '../redux/races/racesReducer';

export const ListOfRaces = () => {
  const races: RacesStateType = useSelector(selectRaces);

  return (
    <div className="list-of-races">
      {races.map(({ id, name }) => (
        <Link key={id} to={`/races/${id}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};
