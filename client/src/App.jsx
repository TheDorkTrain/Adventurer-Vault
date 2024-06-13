import React, { useEffect, useState } from 'react';
import backgroundImage1 from './assets/background_maps/map1.jpg';
import backgroundImage2 from './assets/background_maps/map2.jpg';

const App = () => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const backgroundImages = [backgroundImage1, backgroundImage2];
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setRandomImage(randomImage);
  }, []);

  return (
    <>
      <section id="mainSection" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${randomImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', minHeight: '100vh', backgroundPosition: 'center', }}>
        <div className= "box">
          <p>Welcome to Adventure Vault!</p></div>
      </section>
    </>
  );
};

export default App;