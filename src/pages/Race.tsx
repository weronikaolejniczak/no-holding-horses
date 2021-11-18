import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import { clearRace } from 'redux/race/clearRaceActions';
import { getRaceByIdRequest } from 'redux/race/getRaceByIdActions';
import { selectRaceData, selectRaceIsLoading } from 'redux/race/raceSelectors';
import { BetForm } from 'components/BetForm';
import { getParticipantsRequest } from 'redux/participants/getParticipantsActions';
import { selectParticipantsIsLoading } from 'redux/participants/participantsSelectors';

// TODO: use skeleton loading
export const Race = () => {
  const dispatch = useDispatch();
  const { active, name } = useSelector(selectRaceData);
  const isRaceLoading = useSelector(selectRaceIsLoading);
  const isParticipantsLoading = useSelector(selectParticipantsIsLoading);

  const { id } = useParams();
  const chipLabel = active ? 'ACTIVE' : 'INACTIVE';

  useEffect(() => {
    dispatch(getRaceByIdRequest(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getParticipantsRequest());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearRace());
    };
  }, [dispatch]);

  return (
    <section
      style={{
        padding: 10,
        paddingBottom: 70,
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <header
        style={{ alignItems: 'center', display: 'flex', marginBottom: 20 }}
      >
        <Chip
          label={isRaceLoading ? 'Loading...' : chipLabel}
          sx={{ marginRight: 2 }}
        />
        <h2>{isRaceLoading ? 'Loading...' : name}</h2>
      </header>
      {isParticipantsLoading ? <div>Loading...</div> : <BetForm race={name} />}
    </section>
  );
};
