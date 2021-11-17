import { useParams } from 'react-router-dom';

import styles from 'pages/Race.module.css';

export const Race = () => {
  let { id } = useParams();

  return (
    <div className={styles.race}>
      <h1>{id} race</h1>
    </div>
  );
};
