import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_CHARACTER } from '../utils/queries';

const styles = {
  primaryInfo: {
    display: "grid",
    gridTemplate: "3em 2.5em 2em 2em 2em 2em 2em 2em 2em 6em 1fr / 1fr 1fr 2fr",
    opacity: "revert-layer",
    backgroundColor: "var(--sub-decor)",
    margin: "20px",
    minHeight: "calc(100vh - 247px)",
    width: "40%",
    justifyContent: "space-around",
    border: "5px solid var(--main-decor)",
    color: "var(--sub-light)",
  },
  infoTitle: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.1em",
    gridColumn: "1/3",
    textDecoration: "underline"
  },
  name: {
    fontSize: "1.75em",
    margin: "3px",
    gridColumn: "1/4"
  },
  classLevel: {
    textAlign: "center",
    margin: "0.3em",
    fontSize: "1.1em",
    color: "var(--sub-light)",
    gridArea: "2/1/3/3"
  },
  background: {
    margin: 0,
    gridArea: "3/1/4/3"
  },
  image: {
    gridArea: "2/3/11/4",
    maxWidth: "calc(20vw - 20px)",
    maxHeight: "calc(22.5em - 20px)",
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
    gridArea: "10/1/11/3"
  },
  bio: {
    margin: "5px",
    gridArea: "11/1/12/-1",
    textAlign: "left",
    border: "2px solid var(--sub-light)",
    padding: "10px 15px"
  },
  secondaryInfo: {
    color: "var(--sub-light)",
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
  button: {
    color: "var(--sub-light)",
    textAlign: "center",
    padding: 0
  },
  subWindow: {
    margin: 0,
    padding: "10px",
    gridColumn: "1/-1"
  },
  subItem: {
    margin: "5px",
    textAlign: "left",
    border: "2px solid var(--sub-light)",
    borderRadius: ".6em",
    padding: "10px 15px"
  },
}

function SingleCharacter() {
  const [ secondary, setSecondary ] = useState('')

  const { characterId } = useParams();
  
  const { loading, data } = useQuery(QUERY_ONE_CHARACTER, { variables: { characterId } });

  const stateChange = function(e) {
    setSecondary(e.target.textContent.toLowerCase())
  }
  const subDisplay = function(lineItem) {
    switch (secondary) {
      case 'spells':
        return (<div style={styles.subItem} key={lineItem._id}>
          <p>{lineItem.name}</p>
          <p>{lineItem.description}</p>
        </div>)
      case 'items':
        return (<div style={styles.subItem} key={lineItem._id}>
          <p>{lineItem.name}</p>
          <p>{lineItem.description}</p>
        </div>)
      case 'journal':
        return <p style={styles.subItem} key={lineItem._id}>{lineItem.entry}</p>
      default:
        return <p>Select one of the options above!</p>
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <article style={styles.primaryInfo}>
        {loading ? (<h2>Loading...</h2>) : (<>
          <h2 style={styles.name}>{data.character.name}</h2>
          <p style={styles.classLevel}>Level {data.character.level} {data.character.lineage} {data.character.characterClass}</p>
          <p style={styles.background}>Background: { data.character.background || 'Secret' }</p>
          <p style={styles.infoTitle}>Ability Scores</p>
          <img src={data.character.image || `/src/assets/default-portrait.svg`} style={styles.image}></img>
          <div style={styles.abilities}>
            <p style={styles.stats}>STR: {data.character.abilities.str}</p>
            <p style={styles.stats}>DEX: {data.character.abilities.dex}</p>
            <p style={styles.stats}>CON: {data.character.abilities.con}</p>
            <p style={styles.stats}>INT: {data.character.abilities.int}</p>
            <p style={styles.stats}>WIS: {data.character.abilities.wis}</p>
            <p style={styles.stats}>CHA: {data.character.abilities.dex}</p>
          </div>
          <p style={styles.infoTitle}>Proficiencies</p>
          <p style={styles.saves}>Saving Throws: {data.character.savingThrows}</p>
          <p style={styles.skills}>Skills: {data.character.skills}</p>
          <p style={styles.bio}>Character Summary: {data.character.bio}</p>
          </>
        )}
      </article>
      <article style={styles.secondaryInfo}>
        {loading ? (<h2>Loading...</h2>) : (<>
          <button style={styles.button} onClick={stateChange}>Spells</button>
          <button style={styles.button} onClick={stateChange}>Items</button>
          <button style={styles.button} onClick={stateChange}>Journal</button>
          <div style={styles.subWindow}>
             { data.character[secondary]?.map((lineItem) => { return subDisplay(lineItem); }) || <p>Select one of the options above!</p> }
          </div>
          </>
        )}
      </article>
    </div>
  );
}

export default SingleCharacter