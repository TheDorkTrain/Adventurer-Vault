import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import backgroundImage1 from './assets/background_maps/map1.jpg';
import backgroundImage2 from './assets/background_maps/map2.jpg';
import Header from './components/header';


import { ApolloClient, ApolloProvider, useMutation, gql } from '@apollo/client'; // Add missing imports

const App = () => {
  const [randomImage, setRandomImage] = useState('');


  useEffect(() => {
    const backgroundImages = [backgroundImage1, backgroundImage2];
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setRandomImage(randomImage);
  }, []);

  return (
    <>
    <div className="App"> 
     <Header />
    <section id="mainSection" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${randomImage})`, backgroundSize: 'contain',backgroundRepeat: 'no-repeat', minHeight: '100vh', backgroundPosition: 'center', }}>
        <Outlet />
</section>
</div>
    </>
  );
};


export default App;

