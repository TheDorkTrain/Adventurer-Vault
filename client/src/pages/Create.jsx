import React, { useEffect, useState } from 'react';
import backgroundImage1 from '../assets/background_maps/map1.jpg';
import backgroundImage2 from '../assets/background_maps/map2.jpg';
import DiceRoller from '../components/DiceRoller.jsx';
import { Link } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload.jsx';
import { useMutation } from '@apollo/client';
import { ADD_CHARACTER } from '../utils/mutations';
import Auth from '../utils/auths.js'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Create= () => {
  const [addCharacter] = useMutation(ADD_CHARACTER)
  const [randomImage, setRandomImage] = useState('');
  const [results, setResults] = useState([]);

  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [level, setLevel] = useState('');
  const [lineage, setLineage] = useState('');
  const [background, setBackground] = useState('');
  const [bio, setBio] = useState('');
  
  const [str, setStr] = useState('');
  const [dex, setDex] = useState('');
  const [con, setCon] = useState('');
  const [int, setInt] = useState('');
  const [wis, setWis] = useState('');
  const [cha, setCha] = useState('');
  const [image, setImage] = useState('');
  const [skills, setSkills] = useState('');
  const [savingThrows, setThrows] = useState('');
  
  const loggedIn = Auth.loggedIn();
  if (!loggedIn) {
    window.location.assign('/login')
  }

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

  const handleSubmit = async () => {
    try {
      const { data } = await addCharacter({
        variables: {
          name: name,
          image: image,
          characterClass: characterClass,
          level: parseInt(level),
          lineage: lineage,
          background: background,
          bio: bio,
          abilities: {str: parseInt(str), dex: parseInt(dex), con: parseInt(con), int: parseInt(int), wis: parseInt(wis), cha: parseInt(cha),},
          skills: skills,
          savingThrows: savingThrows,
        },
      });
      // Handle response data as needed
      window.location.assign(`/character/${data.addCharacter._id}`)
    } catch (error) {
      // Handle any errors
      console.error(error)
    }
  };

  return (
    <>
      <section id="mainSection" style={{ minHeight: '100vh', backgroundPosition: 'center', justifyContent: 'space-evenly' }}>
        <form className= "box" style={{height:'100%', paddingBottom: '50px', alignSelf: 'center', }}>
          <div style={{ display: 'flex', flexDirection: 'column', width:'55%',  gap: '2px', fontWeight: 'bold'}}>
          <label id="formLabel">Character Name:  <input value={name} onChange={(event) => setName(event.target.value)} id="formInput" /></label>
          <label id="formLabel">Class:  <input value={characterClass} onChange={(event) => setCharacterClass(event.target.value)} id="formInput" /></label>
          <label id="formLabel">Lineage:  <input value={lineage} onChange={(event) => setLineage(event.target.value)} id="formInput" /></label>
          <label id="formLabel">Background:  <input value={background} onChange={(event) => setBackground(event.target.value)} id="formInput" /></label>
          <label id="formLabel">Level:  <input value={level} onChange={(event) => setLevel(event.target.value)} id="formInput" /></label>
          <label>Character Summary:</label>
          <input value={bio} onChange={(event) => setBio(event.target.value)} style={{width: '95%', height: '80%',}} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width:'40%', fontWeight: 'bold'}}>
          <ImageUpload image={image} setImage={setImage} />            
            
          </div>
          
        </form>

        <div className= "box2">
        <div style={{ display: 'flex', flexDirection: 'column', width:'90%', fontWeight: 'bold'}}>
        <label style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', gap: '5px'}}>Skills  <DiceRoller updateResults={updateResults} /></label>
          <label htmlFor="strField" id="formLabel">Strength:  <input type='number' value={str} onChange={(event) => setStr(event.target.value)} placeholder={rollPlaceholder(1)} name="strField" id="formInput" /></label>
          <label id="formLabel">Dexterity:  <input type='number' value={dex} onChange={(event) => setDex(event.target.value)} placeholder={rollPlaceholder(2)} id="formInput" /></label>
          <label id="formLabel">Constitution:  <input type='number' value={con} onChange={(event) => setCon(event.target.value)} placeholder={rollPlaceholder(3)} id="formInput" /></label>
          <label id="formLabel">Intelligence:  <input type='number' value={int} onChange={(event) => setInt(event.target.value)} placeholder={rollPlaceholder(4)} id="formInput" /></label>
          <label id="formLabel">Wisdom:  <input type='number' value={wis} onChange={(event) => setWis(event.target.value)} placeholder={rollPlaceholder(5)} id="formInput" /></label>
          <label id="formLabel">Charisma:  <input  type='number'value={cha} onChange={(event) => setCha(event.target.value)} placeholder={rollPlaceholder(0)} id="formInput" /></label>
          <div>--------------------------------</div>
          <label id="formLabel">Skill Proficiencies:  <input value={skills} onChange={(event) => setSkills(event.target.value)} id="formInput" /></label>
          <label id="formLabel">Saving Throws:  <input value={savingThrows} onChange={(event) => setThrows(event.target.value)} id="formInput" /></label>
      
          </div>
        </div>
        <div id="subbutt"  onClick={handleSubmit} style={{width: '100%',}}><button style={{width: '20%',marginRight: '50px', backgroundColor: 'var(--sub-decor)'}}>Create your Character!</button> </div>
  
      </section>
    </>
  );
};
export default Create;