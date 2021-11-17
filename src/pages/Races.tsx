import { useState } from "react";
import { Link } from 'react-router-dom';

const dummyRaces = [
  {
    id: '1',
    name: 'Fastest race',
  },
  {
    id: '2',
    name: 'Slowest race',
  }
];

export const Races = () => {
  const [races, setRaces] = useState(dummyRaces);

  return (
    <div>
      <h1>Races</h1>
      {races.map(({ id }) => <Link to={`/races/${id}`}>{id} race</Link>)}
    </div>
  )
}
