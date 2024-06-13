//import { useQuery } from '@apollo/client';
//import { QUERY_USER } from '../utils/queries'; // Add the missing import statement
import { Link } from 'react-router-dom'; // Add the missing import statement
import React from 'react'; // Add the missing import statement
import Create from './Create'; // Add the missing import statement

const Dashboard = () => {

  //const { loading, data } = useQuery(QUERY_USER);
  //const user = data?.me || {};
  const user = {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }



  return (
    

    <>
      <header>
        <nav id="nav">
          <button className="button ribbon-outset border" id="logout">Exit the Dungeon</button> {/* Use className instead of class */}
        </nav>
      </header>
      <div>
        <h1>{user.username}'s Dashboard</h1>
        <div>
          <h2>Your Characters</h2>
          <ul>
            {user.characters?.map((character) => (
              <li key={character._id}>
                <h3>{character.name}</h3>
                <p>Class: {character.class}</p>
                <p>Level: {character.level}</p>
                <p>Lineage:
                  {character.lineage ? (
                    character.lineage
                  ) : (
                    <em>Unknown</em>
                  )}
                </p>
                <p>Background:
                  {character.background ? (
                    character.background) : (
                    <em>Unknown</em>
                  )}
                </p>
                <p>Character Summary: {character.summary}</p>
                <p>Skills: {character.skills}</p>
                <p>Strength: {character.strength}</p>
                <p>Dexterity: {character.dexterity}</p>
                <p>Constitution: {character.constitution}</p>
                <p>Intelligence: {character.intelligence}</p>
                <p>Wisdom: {character.wisdom}</p>
              </li>
            ))}
          </ul>
          <h2>View All Characters</h2>
          <Link to="/characters">View Characters</Link> {/* link to view all characters */}
        </div>
        <div>
          <h2>Create a New Character</h2>
          <form>
            <Link to="/create">Create Character</Link> {/* link to form to create a new character */}
          </form>
        </div>
      </div>
    </>
  );
};



export default Dashboard;
