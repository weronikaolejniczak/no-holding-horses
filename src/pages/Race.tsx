import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, Skeleton } from '@mui/material';

import { clearRace } from 'redux/race/clearRaceActions';
import { getRaceByIdRequest } from 'redux/race/getRaceByIdActions';
import { selectRaceData, selectRaceIsLoading } from 'redux/race/raceSelectors';
import { getParticipantsRequest } from 'redux/participants/getParticipantsActions';
import { selectParticipantsIsLoading } from 'redux/participants/participantsSelectors';
import { BetForm } from 'components/BetForm';
import { BetFormSkeleton } from 'components/BetFormSkeleton';

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
        {isRaceLoading ? (
          <Chip sx={{ marginRight: 2, width: 100 }} />
        ) : (
          <Chip label={chipLabel} sx={{ marginRight: 2 }} />
        )}
        {isRaceLoading ? (
          <Skeleton>
            <h2>Hello, World! I'm a skeleton title!</h2>
          </Skeleton>
        ) : (
          <h2>{name}</h2>
        )}
      </header>
      {isParticipantsLoading ? <BetFormSkeleton /> : <BetForm race={name} />}
    </section>
  );
};
