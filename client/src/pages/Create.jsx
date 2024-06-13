import React, { useEffect, useState } from 'react';
import backgroundImage1 from '../assets/background_maps/map1.jpg';
import backgroundImage2 from '../assets/background_maps/map2.jpg';
import DiceRoller from '../components/DiceRoller.jsx';
import { useMutation } from '@apollo/client';

import { ADD_CHARACTER } from '../utils/mutations';

const Create= () => {
  const [randomImage, setRandomImage] = useState('');
  const [results, setResults] = useState([]);
  
const [name, setName] = useState('');
const [characterClass, setCharacterClass] = useState('');
const [lineage, setLineage] = useState('');
const [background, setBackground] = useState('');
const [level, setLevel] = useState('');
const [abilities, setAbilities] = useState('');
const [bio, setBio] = useState('');

  const [addcharacter, { error }] = useMutation(ADD_CHARACTER);

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  useEffect(() => {
    const backgroundImages = [backgroundImage1, backgroundImage2];
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setRandomImage(randomImage);
  }, []);

 function rollPlaceholder(x) {
    if (results.length > 0) {
      return results[x]
  } else {
      return ""
  }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addcharacter({
        variables: { name, characterClass, level, lineage, background, abilities, skills, savingThrows, bio,},
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section id="mainSection" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${randomImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', minHeight: '100vh', backgroundPosition: 'center', }}>
        <form className= "box">
          <div style={{ display: 'flex', flexDirection: 'column', width:'55%', fontWeight: 'bold'}}>
          <label id="formLabel">Character Name:  <input value={name} onChange={(event) => setName(event.target.value)} id="formInput"></input></label>
          <label id="formLabel">Class:  <input value={characterClass} onChange={(event) => setCharacterClass(event.target.value)} id="formInput"></input></label>
          <label id="formLabel">Lineage:  <input value={lineage} onChange={(event) => setLineage(event.target.value)} id="formInput"></input></label>
          <label id="formLabel">Background:  <input value={background} onChange={(event) => setBackground(event.target.value)} id="formInput"></input></label>
          <label id="formLabel">Level:  <input value={level} onChange={(event) => setLevel(event.target.value)} id="formInput"></input></label>
          <label>Abilities:</label>
          <input value={abilities} onChange={(event) => setAbilities(event.target.value)} placeholder="Second Wind, Action Surge, Fighting Style, Etc" style={{width: '95%', height: '80%'}}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width:'40%', fontWeight: 'bold'}}>
          <label>Upload Picture: </label>
          <input type="file"  accept="image/*" name="image" id="file"  onChange="loadFile(event)"></input>
          <label>Character Summary:</label>
          <input value={bio} onChange={(event) => setBio(event.target.value)} style={{width: '95%', height: '80%'}}></input>
            
          </div>
          
        </form>

        <div className= "box2">
        <div style={{ display: 'flex', flexDirection: 'column', width:'90%', fontWeight: 'bold'}}>
        <label style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', gap: '5px'}}>Skills  <DiceRoller updateResults={updateResults} /></label>
          <label htmlFor="strField" id="formLabel">Strength:  <input placeholder={rollPlaceholder(1)} name="strField" id="formInput"></input></label>
          <label id="formLabel">Dexterity:  <input placeholder={rollPlaceholder(2)} id="formInput"></input></label>
          <label id="formLabel">Constitution:  <input placeholder={rollPlaceholder(3)} id="formInput"></input></label>
          <label id="formLabel">Intelligence:  <input placeholder={rollPlaceholder(4)} id="formInput"></input></label>
          <label id="formLabel">Wisdom:  <input placeholder={rollPlaceholder(5)} id="formInput"></input></label>
          <label id="formLabel">Charisma:  <input placeholder={rollPlaceholder(0)} id="formInput"></input></label>
          <div>--------------------------------</div>
          <label id="formLabel">Skill Proficiencies:  <input id="formInput"></input></label>
          <label id="formLabel">Saving Throws:  <input id="formInput"></input></label>
      
          </div>
        </div>
        <div id="subbutt"  onSubmit={handleFormSubmit} style={{width: '100%',}}><button style={{width: '20%',marginRight: '50px', backgroundColor: 'var(--sub-light)'}}>Create your Character!</button> <button style={{width: '15%', backgroundColor: 'var(--main-color)'}}>Add Spells</button> <button style={{width: '15%',backgroundColor: 'var(--main-color)'}}>Add Items</button> </div>
  
      </section>
    </>
  );
};
export default Create;