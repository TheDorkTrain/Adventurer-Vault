import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const IncreasingHeader = ({ text }) => {
  return (
    <h1 id="title">
      {text.split('').map((letter, index) => (
        <span key={index} style={{ fontSize: `${index * (index / 3) + 25}px` }}>{letter}</span>
      ))}
    </h1>
  );
};


  const handleLogout = () => {
    // Clear the session/token stored in localStorage
    localStorage.removeItem('id_token');
    
    // Redirect the user to the login page
    window.location.href = '/login';
  };

function RenderComponent({ type }) {


  switch (type) {
      case '/':
          return <button onClick={handleLogout} style={{color: 'var(--main-light)'}} className="button ribbon-outset border" id="logout">Exit the Dungeon</button>
      case '/login':
          return <button style={{color: 'var(--main-light)'}} className="button ribbon-outset border" id="login"><Link to="/signup">Adventurers Sign Up!</Link></button>
      case '/signup':
          return <button className="button ribbon-outset border" id="login"><Link to="/login">Gain Entry</Link></button>
      case '/create':
          return <div> <button onClick={handleLogout} style={{color: 'var(--main-light)'}} className="button ribbon-outset border" id="logout">Exit the Dungeon</button> <button className="button ribbon-outset border" id="logout"><Link to="/">Back to Camp</Link></button> </div>
      default:
          return <button style={{color: 'var(--main-light)'}} className="button ribbon-outset border" id="login"><Link to="/signup">Adventurers Sign Up!</Link></button>;
  }
}

function Header() {
  const location = useLocation();

  return (
    <> <header> <img src="/src/assets/party.png"></img><IncreasingHeader text="Adventurer Vault" />
      <nav id="nav">
      <RenderComponent type={location.pathname} />
      </nav>
    </header>
    </>
  )
}

export default Header
