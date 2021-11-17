import { useParams } from 'react-router-dom';

export const Race = () => {
  let { id } = useParams();

  return (
    <div>
      {id} race
    </div>
  )
}
