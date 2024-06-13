import React, { useEffect, useState } from 'react';
import backgroundImage1 from '../assets/background_maps/map1.jpg';
import backgroundImage2 from '../assets/background_maps/map2.jpg';
import DiceRoller from '../components/DiceRoller.jsx';


const Create= () => {
  const [randomImage, setRandomImage] = useState('');
  const [results, setResults] = useState([]);

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


  return (
    <>
      <section id="mainSection" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${randomImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', minHeight: '100vh', backgroundPosition: 'center', }}>
        <div className= "box">
          <div style={{ display: 'flex', flexDirection: 'column', width:'55%', fontWeight: 'bold'}}>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Character Name:  <input style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Class:  <input style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Lineage:  <input style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Background:  <input style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Level:  <input style={{width: '40%', height: '80%'}}></input></label>
          <label>Character Summary:</label>
          <input style={{width: '95%', height: '80%'}}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width:'40%', fontWeight: 'bold'}}>
          <label>Upload Picture: </label>
          <input type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)"></input>
            
          </div>
          
        </div>

        <div className= "box2">
        <div style={{ display: 'flex', flexDirection: 'column', width:'90%', fontWeight: 'bold'}}>
        <label style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', gap: '5px'}}>Skills  <DiceRoller updateResults={updateResults} /></label>
          <label htmlFor="strField" style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Strength:  <input placeholder={rollPlaceholder(1)} name="strField" style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Dexterity:  <input placeholder={rollPlaceholder(2)} style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Constitution:  <input placeholder={rollPlaceholder(3)} style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Intelligence:  <input placeholder={rollPlaceholder(4)} style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Wisdom:  <input placeholder={rollPlaceholder(5)} style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Charisma:  <input placeholder={rollPlaceholder(0)} style={{width: '40%', height: '80%'}}></input></label>
          <div>--------------------------------</div>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Skill Proficiencies:  <input style={{width: '40%', height: '80%'}}></input></label>
          <label style={{ display: 'flex', flexDirection: 'row', gap:'10px', justifyContent: 'space-between'}}>Saving Throws:  <input style={{width: '40%', height: '80%'}}></input></label>
      
          </div>
        </div>
        <div id="subbutt" style={{width: '100%',}}><button style={{width: '20%',marginRight: '50px', backgroundColor: 'var(--sub-light)'}}>Create your Character!</button> <button style={{width: '15%', backgroundColor: 'var(--main-color)'}}>Add Spells</button> <button style={{width: '15%',backgroundColor: 'var(--main-color)'}}>Add Items</button> </div>
  
      </section>
    </>
  );
};
export default Create;