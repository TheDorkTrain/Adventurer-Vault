import noImg from '../assets/default-portrait.svg'
export default function SingleStats({ styles, character}) {
  return (<>
    <h2 style={styles.name}>{character.name}</h2>
    <p style={styles.classLevel}>Level {character.level} {character.lineage} {character.characterClass}</p>
    <p style={styles.background}>Background: { character.background || 'Secret' }</p>
    <p style={styles.infoTitle}>Ability Scores</p>
    <img src={character.image || noImg} style={styles.image}></img>
    <div style={styles.abilities}>
      <p style={styles.stats}>STR: {character.abilities.str}</p>
      <p style={styles.stats}>DEX: {character.abilities.dex}</p>
      <p style={styles.stats}>CON: {character.abilities.con}</p>
      <p style={styles.stats}>INT: {character.abilities.int}</p>
      <p style={styles.stats}>WIS: {character.abilities.wis}</p>
      <p style={styles.stats}>CHA: {character.abilities.dex}</p>
    </div>
    <p style={styles.infoTitle}>Proficiencies</p>
    <p style={styles.saves}>Saving Throws: {character.savingThrows}</p>
    <p style={styles.skills}>Skills: {character.skills}</p>
    <p style={styles.bio}>Character Summary: {character.bio}</p>
    </>)
}