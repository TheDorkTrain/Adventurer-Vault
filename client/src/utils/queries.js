import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        me {
        _id
        username
        characters
        {
            _id
            name
            image
            class
            Level
            lineage
            abilities
        }
        journalEntries
        {
            _id
            entryText
        }
    }
    `;

export const QUERY_CHARACTERS = gql`
    {
        characters {
            _id
            name
            image
            class
            Level
            lineage
            abilities
        }
    }
`;



