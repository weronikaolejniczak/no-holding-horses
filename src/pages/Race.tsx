import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import { getRaceByIdRequest } from 'redux/race/getRaceByIdActions';
import { selectRaceData } from 'redux/race/raceSelectors';
import { BetForm } from 'components/BetForm';
import { getParticipantsRequest } from 'redux/participants/getParticipantsActions';

export const Race = () => {
  const dispatch = useDispatch();
  const { active, name } = useSelector(selectRaceData);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getRaceByIdRequest(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getParticipantsRequest());
  }, [dispatch]);

  return (
    <section style={{ padding: 10 }}>
      <header
        style={{ alignItems: 'center', display: 'flex', marginBottom: 20 }}
      >
        <Chip label={active ? 'ACTIVE' : 'INACTIVE'} sx={{ marginRight: 2 }} />
        <h2>{name}</h2>
      </header>
      <BetForm race={name} />
    </section>
  );
};
