import { gql } from '@apollo/client';

// TODO: What should display from each request?  Pick the most if it is re-used
export const QUERY_USER = gql`
    query Me {
        me {
            _id
            username
            characters {
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
    query AllCharacters {
        characters {
            _id
            name
            image
            characterClass
            level
            lineage
        }
    }
`;

export const QUERY_ONE_CHARACTER = gql`
    query OneCharacter($characterId: ID!) {
        character(characterId: $characterId) {
            _id
            name
            image
            characterClass
            level
            lineage
            background
            bio
            abilities {
                str
                dex
                con
                int
                wis
                cha
            }
            skills
            savingThrows
            spells {
                _id
                name
                description
            }
            items {
                _id
                name
                description
            }
            feats {
                _id
                name
                description
            }
            journal {
                _id
                entry
            }
        }
    }
`;