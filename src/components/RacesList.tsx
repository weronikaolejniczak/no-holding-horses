import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, Chip } from '@mui/material';

import { selectRacesData } from 'redux/races/racesSelectors';
import { IRace } from 'interfaces/IRace';

// TODO: tidy up chip section, extract logic to hook
export const RacesList = () => {
  const races: IRace[] = useSelector(selectRacesData);

  const [filteredRaces, setFilteredRaces] = useState(races);
  const [filterMode, setFilterMode] = useState('all');

  const filterRaces = (active: boolean) =>
    setFilteredRaces(races.filter((race) => race.active === active));

  const showActiveRaces = () => {
    filterRaces(true);
    setFilterMode('active');
  };

  const showInactiveRaces = () => {
    filterRaces(false);
    setFilterMode('inactive');
  };

  const showAllRaces = () => {
    setFilteredRaces(races);
    setFilterMode('all');
  };

  return (
    <div className="races-list">
      <Chip
        color={filterMode === 'all' ? 'primary' : undefined}
        label="All"
        sx={{ marginRight: 1 }}
        onClick={showAllRaces}
      />
      <Chip
        color={filterMode === 'active' ? 'primary' : undefined}
        label="Active"
        sx={{ marginRight: 1 }}
        onClick={showActiveRaces}
      />
      <Chip
        color={filterMode === 'inactive' ? 'primary' : undefined}
        label="Inactive"
        onClick={showInactiveRaces}
      />
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
