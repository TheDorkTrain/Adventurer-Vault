import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
        token
        user {
            _id
        }
        }
    }
    `;

    export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password) {
        token
        user {
            _id
        }
        }
    }
    `;

    export const ADD_CHARACTER = gql`
    mutation addCharacter($name: String!, $class: String!, $Level: Int!, $lineage: String!, $abilities: String!)
    {
        addCharacter(name: $name, class: $class, Level: $Level, lineage: $lineage, abilities: $abilities)
        {
            name
            class
            Level
            lineage
            abilities
        }
    }
    `;
    export const ADD_JOURNAL_ENTRY = gql`
    mutation addJournalEntry($entryText: String!)
    {
        addJournalEntry(entryText: $entryText)
        {
            entryText
        }
    }
    `;

    export const ADD_SPELL = gql`
    mutation addSpell($name: String!, $description: String!)
    {
        addSpell(name: $name, description: $description)
        {
            name
            description
        }
    }
    `;

    export const ADD_ITEM = gql`
    mutation addItem($name: String!, $description: String!)

    {
        addItem(name: $name, description: $description)
        {
            name
            description
        }
    }
    `;

