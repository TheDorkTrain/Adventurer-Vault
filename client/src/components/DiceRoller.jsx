import React from 'react';

const DiceRoller = ({ updateResults }) => {
  const rollDice = () => {
    let rolls = [];
    for (let i = 0; i < 6; i++) {
      const diceValues = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      const sortedDiceValues = diceValues.sort((a, b) => a - b).slice(1); // Remove the lowest value
      const sum = sortedDiceValues.reduce((acc, curr) => acc + curr, 0);
      rolls.push(sum);
    }
    updateResults(rolls);
  };

  return (
      <button style={{height:'100%', width:'20%', padding: '0px'}} onClick={rollDice}>Roll</button>
  );
};

export default DiceRoller;