import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_CHARACTER } from '../utils/queries';
import { ADD_SPELL, ADD_ITEM, ADD_JOURNAL_ENTRY } from '../utils/mutations'
import styles from './singleStyles'
import SingleStats from '../components/SingleStats'
import SingleDetails from '../components/SingleDetails';

function SingleCharacter() {
  const [ secondary, setSecondary ] = useState('')

  const { characterId } = useParams();
  
  const { loading, data } = useQuery(QUERY_ONE_CHARACTER, { variables: { characterId } });

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <article style={styles.primaryInfo}>
        {loading ? (<h2>Loading...</h2>) : <SingleStats styles={styles} character={data.character} /> }
      </article>
      <article style={styles.secondaryInfo}>
        {loading ? (<h2>Loading...</h2>) : <SingleDetails styles={styles} secondary={secondary} setSecondary={setSecondary} character={data.character} /> }
      </article>
    </div>
  );
}

export default SingleCharacter