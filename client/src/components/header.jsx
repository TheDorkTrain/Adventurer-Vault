import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';


const IncreasingHeader = ({ text }) => {
  return (
    <h1 id="title">
      {text.split('').map((letter, index) => (
        <span key={index} style={{ fontSize: `${index * (index / 3) + 25}px` }}>{letter}</span>
      ))}
    </h1>
  );
};

//TODO Separate Log out and Dashboard buttons

function RenderComponent({ type }) {
  switch (type) {
      case '/':
          return <button className="button ribbon-outset border" id="logout">Exit the Dungeon</button>
      case '/login':
          return <button style={{color: 'var(--main-light)'}} className="button ribbon-outset border" id="login"><Link to="/signup">Adventurers Sign Up!</Link></button>
      case '/signup':
          return <button className="button ribbon-outset border" id="login"><Link to="/signup">Gain Entry</Link></button>
      case '/create':
          return <button className="button ribbon-outset border" id="logout">Exit the Dungeon</button>, <button className="button ribbon-outset border" id="logout"><Link to="/signup">Back to Camp</Link></button>
      default:
          return null;
  }
}

function Header() {


  return (
    <> <header> <img src="./src/assets/party.png"></img><IncreasingHeader text="Adventurer Vault" />
      <nav id="nav">
      <RenderComponent type={location.pathname} />
      </nav>
    </header>
    </>
  )
}

export default Header
