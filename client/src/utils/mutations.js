import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String! $password: String!) {
        addUser(username: $username, email: $email,  password: $password) {
        token
            user {
                _id
            }
        }
    }
`;

// TODO: What all do we want to display after character creation?
export const ADD_CHARACTER = gql`
    mutation AddCharacter($name: String!, $characterClass: String!, $level: Int!, $lineage: String!, $abilities: AbilitiesInput!, $image: String, $background: String, $skills: String, $savingThrows: String, $bio: String) {
        addCharacter(name: $name, characterClass: $characterClass, level: $level, lineage: $lineage, abilities: $abilities, image: $image, background: $background, skills: $skills, savingThrows: $savingThrows, bio: $bio) {
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
            journal {
                _id
                entry
            }
        }
    }
`;
    
export const ADD_SPELL = gql`
    mutation AddSpell($characterId: ID!, $name: String!, $description: String!) {
        addSpell(characterId: $characterId, name: $name, description: $description) {
            name
            spells {
                _id
                name
                description
            }
        }
    }
`;

export const ADD_ITEM = gql`
    mutation AddItem($characterId: ID!, $name: String!, $description: String!) {
        addItem(characterId: $characterId, name: $name, description: $description) {
            name
            items{
                _id
                name    
                description
            }
        }
    }
`;

export const ADD_FEAT = gql`
    mutation AddFeat($characterId: ID!, $name: String!, $description: String!) {
        addFeat(characterId: $characterId, name: $name, description: $description) {
            name
            feats{
                _id
                name    
                description
            }
        }
    }
`;

export const ADD_JOURNAL_ENTRY = gql`
    mutation AddJournalEntry($characterId: ID!, $entry: String!) {
        addEntry(characterId: $characterId, entry: $entry) {
            name
            journal {
                _id
                entry
            }
        }
    }
`;

export const DELETE_CHARACTER =gql`
    mutation deleteCharacter($characterId: ID!) {
    deleteCharacter(characterId: $characterId){
    _id
    }
 }
`

export const DELETE_SPELL =gql`
    mutation deleteSpell($characterId: ID!, $spellId: ID!) {
    deleteSpell(characterId: $characterId, spellId: $spellId){
    name
    spells{
    _id
    }
    }
 }
`

export const DELETE_ITEM =gql`
    mutation deleteItem($characterId: ID!, $itemId: ID!) {
    deleteItem(characterId: $characterId, itemId: $itemId){
    name
    items{
    _id
    }
    }
 }
`

export const DELETE_FEAT =gql`
    mutation deleteFeat($characterId: ID!, $featId: ID!) {
    deleteFeat(characterId: $characterId, featId: $featId){
    name
    feats{
    _id
    }
    }
 }
`

export const DELETE_ENTRY =gql`
    mutation deleteEntry($characterId: ID!, $entryId: ID!) {
    deleteEntry(characterId: $characterId, entryId: $entryId){
    name
    journal{
    _id
    }
    }
 }
`