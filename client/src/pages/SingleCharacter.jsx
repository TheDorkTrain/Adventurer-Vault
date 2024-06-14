import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_CHARACTER } from '../utils/queries';

function SingleCharacter() {
  const { characterId } = useParams();

  const { loading, data } = useQuery(QUERY_ONE_CHARACTER, { variables: { characterId } });

  return (
    <></>
  );
}

export default SingleCharacter