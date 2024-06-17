import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../utils/queries'; // Add the missing import statement
import { Link } from 'react-router-dom'; 

const Character = ({ name }) => {

    const { loading, error, data } = useQuery(QUERY_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="box" style={{display: 'flex', flexDirection: 'column'}}>
            <h1>List of Adventurers for Hire</h1>
            <ul style={{listStyleType: 'none'}}>
                {data.characters.map((character) => (
                    <li key={character._id}><Link to={`/viewcharacter/${character._id}`}>{character.name} {character.level} {character.characterClass}</Link></li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Character;