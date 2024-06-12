import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query Me {
        me {
            _id
            username
            characters
            {
                _id
                name
                image
                characterClass
                level
                lineage
                abilities {
                    str
                    dex
                    con
                    int
                    wis
                    cha
                }
                journal {
                    entry
                }
            }
        }
    }
    `;

export const QUERY_CHARACTERS = gql`
    {
        characters {
            _id
            name
            image
            characterClass
            level
            lineage
            abilities
        }
    }
`;

