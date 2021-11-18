import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, Chip } from '@mui/material';

import { selectRacesData } from 'redux/races/racesSelectors';
import { IRace } from 'interfaces/IRace';
import { ChipsSection } from 'components/ChipsSection';

export const RacesList = () => {
  const races: IRace[] = useSelector(selectRacesData);

  const [filteredRaces, setFilteredRaces] = useState(races);

  return (
    <div className="races-list">
      <ChipsSection setFilteredRaces={setFilteredRaces} />
      {filteredRaces.map(({ id, name, active }) => (
        <Link style={{ textDecoration: 'none' }} key={id} to={`/races/${id}`}>
          <Card raised sx={{ padding: 2, margin: 2 }}>
            <Chip
              label={active ? 'ACTIVE' : 'INACTIVE'}
              variant={active ? undefined : 'outlined'}
              sx={{ marginRight: 1 }}
            />
            {name}
          </Card>
        </Link>
      ))}
    </div>
  );
};
