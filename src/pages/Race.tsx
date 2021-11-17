import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import styles from 'pages/Race.module.css';
import { getRaceByIdRequest } from 'redux/race/actions/getRaceById';
import { selectRace } from 'redux/race/raceSelectors';
import { BetForm } from 'components/BetForm';

export const Race = () => {
  const dispatch = useDispatch();
  const { active, name }: any = useSelector(selectRace); // TODO: fix any type

  const { id } = useParams();

  useEffect(() => {
    dispatch(getRaceByIdRequest(Number(id)));
  }, [dispatch, id]);

  return (
    <section className={styles.race}>
      <header
        style={{ alignItems: 'center', display: 'flex', marginBottom: 20 }}
      >
        <Chip label={active ? 'ACTIVE' : 'INACTIVE'} sx={{ marginRight: 2 }} />
        <h2>{name}</h2>
      </header>
      <BetForm />
    </section>
  );
};
