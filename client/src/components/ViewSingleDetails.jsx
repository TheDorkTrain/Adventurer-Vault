

export default function SingleDetails({ styles, secondary, setSecondary, character }) {


  const stateChange = function(e) {
    setSecondary(e.target.textContent.toLowerCase())
  }

  const subDisplay = function(lineItem) {
    switch (secondary) {
      case 'spells':
        return (<div style={styles.subItem} key={lineItem._id}>
          <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p></div>
          <p>{lineItem.description}</p>
        </div>)
      case 'items':
        return (<div style={styles.subItem} key={lineItem._id}>
          <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p> </div>
          <p>{lineItem.description}</p>
        </div>)
      case 'feats':
          return (<div style={styles.subItem} key={lineItem._id}>
            <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p></div>
            <p>{lineItem.description}</p>
          </div>)
      case 'journal':
        return (<div style={styles.subItem} key={lineItem._id}>
          <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p></div>
          <p>{lineItem.entry}</p>
        </div>)
      default:
        return <p>Select one of the options above!</p>
    }
  }

  return(<>
    <button style={styles.button} onClick={stateChange}>Spells</button>
    <button style={styles.button} onClick={stateChange}>Items</button>
    <button style={styles.button} onClick={stateChange}>Feats</button>
    <button style={styles.button} onClick={stateChange}>Journal</button>
    <div style={{ ...styles.subWindow, overflowY: "scroll" }}>
       { character[secondary]?.map((lineItem) => { return subDisplay(lineItem); }) || <p>Select one of the options above!</p> }
    </div>


</>
)
}

