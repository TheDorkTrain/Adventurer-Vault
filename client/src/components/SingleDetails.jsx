import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { useMutation } from '@apollo/client';
import { ADD_SPELL, ADD_ITEM, ADD_JOURNAL_ENTRY, ADD_FEAT, DELETE_SPELL, DELETE_ITEM, DELETE_FEAT, DELETE_ENTRY } from '../utils/mutations';

export default function SingleDetails({ styles, secondary, setSecondary, character }) {
//For Add Spell Modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//For Add Item Modal
const [show2, setShow2] = useState(false);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);

//For Add Feat Modal
const [show4, setShow4] = useState(false);
const handleClose4 = () => setShow4(false);
const handleShow4 = () => setShow4(true);

  //For Add Journal Modal
const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);

//For Mutations
const [addSpell] = useMutation(ADD_SPELL, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [addItem] = useMutation(ADD_ITEM, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [addFeat] = useMutation(ADD_FEAT, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [addEntry] = useMutation(ADD_JOURNAL_ENTRY, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [deleteSpell] = useMutation(DELETE_SPELL, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [deleteItem] = useMutation(DELETE_ITEM, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [deleteFeat] = useMutation(DELETE_FEAT, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [deleteEntry] = useMutation(DELETE_ENTRY, {
  refetchQueries: [
    'OneCharacter'
  ]
})
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [entry, setEntry] = useState('');

const handleSubmitSpell = async () => {

  try {
    const { data } = await addSpell({
      variables: {
        characterId: character._id,
        name: name,
        description: description,
      },
    });
    setName('');
    setDescription('');
    handleClose();
  } catch (error) {
    console.error("Form failed", error)
  }
};

const handleSubmitItem = async () => {
  try {
    const { data } = await addItem({
      variables: {
        characterId: character._id,
        name: name,
        description: description,
      },
    });
    setName('');
    setDescription('');
    handleClose2();
  } catch (error) {
    console.error(error)
  }
};

const handleSubmitFeat = async () => {
  try {
    const { data } = await addFeat({
      variables: {
        characterId: character._id,
        name: name,
        description: description,
      },
    });
    setName('');
    setDescription('');
    handleClose4();
  } catch (error) {
    console.error(error)
  }
};

const handleSubmitEntry= async () => {
  try {
    const { data } = await addEntry({
      variables: {
        characterId: character._id,
        name: name,
        entry: entry,
      },
    });
    setName('');
    setEntry('');
    handleClose3();
  } catch (error) {
    console.error(error)
  }
};

const handleDeleteSpell= async (lineItem) => {
  try {
    const { data } = await deleteSpell({
      variables: {
        characterId: character._id,
        spellId: lineItem._id
      },
    });
  } catch (error) {
    console.error(error)
  }
}

const handleDeleteItem= async (lineItem) => {
  try {
    const { data } = await deleteItem({
      variables: {
        characterId: character._id,
        itemId: lineItem._id
      },
    });
  } catch (error) {
    console.error(error)
  }
}
const handleDeleteFeat= async (lineItem) => {
  try {
    const { data } = await deleteFeat({
      variables: {
        characterId: character._id,
        featId: lineItem._id
      },
    });
  } catch (error) {
    console.error(error)
  }
}

const handleDeleteEntry= async (lineItem) => {
  try {
    const { data } = await deleteEntry({
      variables: {
        characterId: character._id,
        entryId: lineItem._id
      },
    });
  } catch (error) {
    console.error(error)
  }
}

  const stateChange = function(e) {
    setSecondary(e.target.textContent.toLowerCase())
  }

  const subDisplay = function(lineItem) {
    switch (secondary) {
      case 'spells':
        return (<div style={styles.subItem} key={lineItem._id}>
          <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p><CloseButton onClick={() => handleDeleteSpell(lineItem)} /></div>
          <p>{lineItem.description}</p>
        </div>)
      case 'items':
        return (<div style={styles.subItem} key={lineItem._id}>
          <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p><CloseButton onClick={() => handleDeleteItem(lineItem)} /></div>
          <p>{lineItem.description}</p>
        </div>)
      case 'feats':
          return (<div style={styles.subItem} key={lineItem._id}>
            <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p><CloseButton onClick={() => handleDeleteFeat(lineItem)} /></div>
            <p>{lineItem.description}</p>
          </div>)
      case 'journal':
        return (<div style={styles.subItem} key={lineItem._id}>
          <div style={{display: 'flex', justifyContent: 'space-between' }}><p>{lineItem.name}</p><CloseButton onClick={() => handleDeleteEntry(lineItem)} /></div>
          <p>{lineItem.entry}</p>
        </div>)
      default:
        return <p>Select one of the options above!</p>
    }
  }
  const subButt = function() {
    switch (secondary) {
      case 'spells':
        return  <>
        <Button style={{backgroundColor: 'var(--main-decor)', width: '100px', border: '1px, solid, white'}} onClick={handleShow}>
          Add Spell
        </Button> <Button style={{backgroundColor: 'var(--main-decor)', border: '1px, solid, white'}} onClick={() => location.reload()}>
          Refresh
        </Button> </>
      case 'items':
        return  <>
        <Button style={{backgroundColor: 'var(--main-decor)', width: '100px', border: '1px, solid, white'}} onClick={handleShow2}>
          Add Item
        </Button><Button style={{backgroundColor: 'var(--main-decor)', border: '1px, solid, white'}} onClick={() => location.reload()}>
          Refresh
        </Button> </>
      case 'feats':
          return  <>
            <Button style={{backgroundColor: 'var(--main-decor)', width: '100px', border: '1px, solid, white'}} onClick={handleShow4}>
               Add Feat
            </Button><Button style={{backgroundColor: 'var(--main-decor)', border: '1px, solid, white'}} onClick={() => location.reload()}>
            Refresh
            </Button> </>
      case 'journal':
        return <>
        <Button style={{backgroundColor: 'var(--main-decor)', width: '100px', border: '1px, solid, white'}} onClick={handleShow3}>
        Add Entry
      </Button>
      <Button style={{backgroundColor: 'var(--main-decor)', border: '1px, solid, white'}} onClick={() => location.reload()}>
      Refresh
    </Button> </>
      default:
        return 
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
    <div style={{display: 'flex', justifyContent: 'center', width:'100%'}}> {subButt()}</div>



<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Add Spell</Modal.Title>
</Modal.Header>
<Modal.Body><label id="formLabel">Spell Name:  <input type='string' value={name} onChange={(event) => setName(event.target.value)} placeholder="fireball" id="formInput" /></label>
<label id="formLabel">Spell Description:  <input style={{height: '100px',}} value={description} type='string' onChange={(event) => setDescription(event.target.value)} placeholder="spell level, effect, etc" id="formInput" /></label>
</Modal.Body>
<Modal.Footer>
<button onClick={handleSubmitSpell} style={{width: '40%', height: '10%', backgroundColor: 'var(--main-color)'}} >Add Spell</button>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
</Modal.Footer>
</Modal>

<Modal show={show2} onHide={handleClose2}>
<Modal.Header closeButton>
  <Modal.Title>Add Item</Modal.Title>
</Modal.Header>
<Modal.Body>
<label id="formLabel">Item Name:  <input type='string' value={name} onChange={(event) => setName(event.target.value)} placeholder="Bag of Holding" id="formInput" /></label>
<label id="formLabel">Item Description:  <input style={{height: '100px',}} type='string' value={description} onChange={(event) => setDescription(event.target.value)} placeholder="use, where you found it..." id="formInput" /></label>
</Modal.Body>
<Modal.Footer>
<button onClick={handleSubmitItem} style={{width: '40%', height: '10%', backgroundColor: 'var(--main-color)'}} >Add Item</button>
  <Button variant="secondary" onClick={handleClose2}>
    Close
  </Button>
</Modal.Footer>
</Modal>

<Modal show={show4} onHide={handleClose4}>
<Modal.Header closeButton>
  <Modal.Title>Add Feat</Modal.Title>
</Modal.Header>
<Modal.Body>
<label id="formLabel">Feat/Ability Name:  <input type='string' value={name} onChange={(event) => setName(event.target.value)} placeholder="Fighting Style" id="formInput" /></label>
<label id="formLabel">Description:  <input style={{height: '100px',}} type='string' value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Feats, Martial Abilities.." id="formInput" /></label>
</Modal.Body>
<Modal.Footer>
<button onClick={handleSubmitFeat} style={{width: '40%', height: '10%', backgroundColor: 'var(--main-color)'}} >Add Feat</button>
  <Button variant="secondary" onClick={handleClose4}>
    Close
  </Button>
</Modal.Footer>
</Modal>

<Modal show={show3} onHide={handleClose3}>
<Modal.Header closeButton>
  <Modal.Title>Add Journal Entry</Modal.Title>
</Modal.Header>
<Modal.Body>
<label id="formLabel">Entry Name:  <input type='string' value={name} onChange={(event) => setName(event.target.value)} placeholder="Name, Date, Etc" id="formInput" /></label>
<label id="formLabel">Notes:  <input style={{height: '100px',}} value={entry} type='string' onChange={(event) => setEntry(event.target.value)} placeholder="recount the adventure" id="formInput" /></label>
</Modal.Body>
<Modal.Footer>
<button onClick={handleSubmitEntry} style={{width: '40%', height: '10%', backgroundColor: 'var(--main-color)'}} >Add Entry</button>
  <Button variant="secondary" onClick={handleClose3}>
    Close
  </Button>
</Modal.Footer>
</Modal>


</>
)
}

