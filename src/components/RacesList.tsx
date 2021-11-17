import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';

import { selectRaces } from 'redux/races/racesSelectors';
import { RacesStateType } from 'redux/races/racesReducer';

export const RacesList = () => {
  const races: RacesStateType = useSelector(selectRaces);

  return (
    <div className="races-list">
      {races.map(({ id, name }) => (
        <Link key={id} to={`/races/${id}`}>
          <Card raised sx={{ padding: 2, margin: 2 }}>
            {name}
          </Card>
        </Link>
      ))}
    </div>
  );
};
