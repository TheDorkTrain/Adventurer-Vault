import { Outlet, BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import backgroundImage1 from './assets/background_maps/map1.jpg';
import backgroundImage2 from './assets/background_maps/map2.jpg';
import Header from './components/header';
import Footer from './components/Footer';
import './App.css';



const App = () => {

  const classNames = ['map1', 'map2', 'map3', 'map4', 'map5', 'map6', 'map7', 'map8', 'map9', 'map10'];

  //select a random background image
  const randomClass = classNames[Math.floor(Math.random() * classNames.length)];

  return (
    <>
    <Header />
    <div className={randomClass}>

      
      <Outlet />
    </div>
    <Footer />
    </>
  );

};

export default App;

