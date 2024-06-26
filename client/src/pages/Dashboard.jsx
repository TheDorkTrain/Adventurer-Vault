import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Link } from 'react-router-dom';
import React from 'react';
import Auth from '../utils/auths'

const Dashboard = () => {

  const { loading, data } = useQuery(QUERY_USER);

  const user = data?.me || {};

  const loggedIn = Auth.loggedIn();
  if (!loggedIn) {
    window.location.assign('/')
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    

    <>
    <h1 style={{fontSize: "40px"}}>{user.username}'s Camp</h1>
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <div className="box" style={{display: 'flex', flexDirection: 'column'}}>
          <h2>Your Characters</h2>
          <ul style={{listStyleType: 'none'}}>
            {user.characters?.map((character) => (
              <li key={character._id}>
                <h3><Link to={`/character/${character._id}`}>{character.name}</Link></h3>
                {/* <p>Class: {character.class}</p>
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
                <p>Wisdom: {character.wisdom}</p> */}
              </li>
            ))}
          </ul>
        </div>
        <div>
        <div className="box2" style={{alignItems: 'center', width: '100%'}}>
          <form>
            <Link to="/create">Create New Character</Link> {/* link to form to create a new character */}
          </form>
        </div>
        <div className="box2" style={{alignItems: 'center', width: '100%'}}>
        <Link to='/allcharacters'>View All Characters</Link> {/* link to view all characters */}
        </div>
        </div>
      </div>
    </>
  );
};



export default Dashboard;
