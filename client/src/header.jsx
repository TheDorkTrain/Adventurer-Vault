import { useState } from 'react'

const IncreasingHeader = ({ text }) => {
    return (
      <h1 id="title">
        {text.split('').map((letter, index) => (
          <span key={index} style={{ fontSize: `${index * (index/3) +25}px` }}>{letter}</span>
        ))}
      </h1>
    );
  };

function Header() {

  return (
    <> <header> <img src="./src/assets/party.png"></img><IncreasingHeader text="Adventurer Vault"/>
    <nav id="nav">
   <button class="button ribbon-outset border" id="login">Gain Entry</button>

   </nav>
    </header> 
   </>
  )
}

export default Header
