import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_CHARACTER } from '../utils/queries';

const styles = {
  primaryInfo: {
    display: "grid",
    gridTemplate: "3em 2.5em 2em 2em 2em 2em 2em 2em 2em 2em 2em 4em 1fr / 1fr 1fr 2fr",
    opacity: "revert-layer",
    backgroundColor: "var(--sub-decor)",
    margin: "20px",
    minHeight: "calc(100vh - 247px)",
    width: "40%",
    justifyContent: "space-around",
    border: "5px solid var(--main-decor)",
    color: "var(--sub-light)",
  },
  secondaryInfo: {
    display: "grid",
    gridTemplate: "2em 1fr / 1fr 1fr 1fr",
    opacity: "revert-layer",
    backgroundColor: "var(--sub-decor)",
    margin: "20px",
    height: "calc(100vh - 247px)",
    width: "40%",
    justifyContent: "space-around",
    border: "5px solid var(--main-decor)",
  },
  name: {
    fontSize: "1.75em",
    margin: "3px",
    gridColumn: "1/4"
  },
  button: {
    color: "var(--sub-light)",
    textAlign: "center"
  },
  classLevel: {
    textAlign: "center",
    margin: "0.3em",
    fontSize: "1.1em",
    color: "var(--sub-light)",
    gridArea: "2/1/3/3"
  },
  // TODO: max height for image, maybe move up? what with the new margins and all
  image: {
    gridArea: "3/3/4/4",
    maxWidth: "calc(20vw - 20px)",
    margin: "10px",
    color: "var(--sub-light)"
  },
  abilities: {
    gridArea: "5/1/8/3",
    display: "grid",
    gridTemplate: "1fr 1fr 1fr / 1fr 1fr",
    gridAutoFlow: "column"
  },
  stats: {
    textAlign: "center",
    margin: 0,
    color: "var(--sub-light)",
  },
  saves: {
    margin: 0,
    gridArea: "9/1/10/3"
  },
  skills: {
    margin: 0,
    gridArea: "10/1/12/3"
  },
}

function SingleCharacter() {
  const { characterId } = useParams();

  const { loading, data } = useQuery(QUERY_ONE_CHARACTER, { variables: { characterId } });
  console.log(data)
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <article style={styles.primaryInfo}>
        {loading ? (<h2>Loading...</h2>) : (<>
          {/* // TODO: Background under classLevel, add section titles for ability scores and proficiencies */}
          <h2 style={styles.name}>{data.character.name}</h2>
          <p style={styles.classLevel}>Level {data.character.level} {data.character.characterClass}</p>
          <img src={data.character.image || `/src/assets/default-portrait.svg`} style={styles.image}></img>
          <div style={styles.abilities}>
            {/* // TODO: Map the abilities */}
            <p style={styles.stats}>STR: {data.character.abilities.str}</p>
            <p style={styles.stats}>DEX: {data.character.abilities.dex}</p>
            <p style={styles.stats}>CON: {data.character.abilities.con}</p>
            <p style={styles.stats}>INT: {data.character.abilities.int}</p>
            <p style={styles.stats}>WIS: {data.character.abilities.wis}</p>
            <p style={styles.stats}>CHA: {data.character.abilities.dex}</p>
          </div>
          <p style={styles.saves}>Saving Throws: {data.character.savingThrows}</p>
          <p style={styles.skills}>Skills: {data.character.skills}</p>
          {/* // TODO: bio (& something else?) under image */}
          </>
        )}
      </article>
      <article style={styles.secondaryInfo}>
        {loading ? (<h2>Loading...</h2>) : (<>
      {/* // TODO: figure this out */}
          <button style={styles.button}>Spells</button>
          <button style={styles.button}>Items</button>
          <button style={styles.button}>Journal</button>
          </>
        )}
      </article>
    </div>
  );
}

export default SingleCharacter