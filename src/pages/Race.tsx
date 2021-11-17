import { useParams } from 'react-router-dom';

export const Race = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>{id} race</h1>
    </div>
  )
}
