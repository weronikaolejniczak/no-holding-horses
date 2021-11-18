import { useSelector } from 'react-redux';

import { Chip } from '@mui/material';
import { useState } from 'react';
import { selectRacesData } from 'redux/races/racesSelectors';
import { IRace } from 'interfaces/IRace';

interface IChipsSectionProps {
  setFilteredRaces: (races: IRace[]) => void;
}

export const ChipsSection = ({ setFilteredRaces }: IChipsSectionProps) => {
  const races: IRace[] = useSelector(selectRacesData);

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
    <div className="chips-section">
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
    </div>
  );
};
