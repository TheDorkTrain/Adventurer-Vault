const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    characters: [Character]!
  }

  type Abilities {
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
  }

  input AbilitiesInput {
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
  }

  type Spell {
    _id: ID
    name: String
    description: String
  }

  type Item {
    _id: ID
    name: String
    description: String
  }

  type Entry {
    _id: ID
    entry: String
  }

  type Character {
    _id: ID
    name: String!
    image: String
    characterClass: String!
    level: Int!
    lineage: String!
    background: String
    abilities: Abilities!
    skills: [String]
    savingThrows: [String]
    spells: [Spell]!
    items: [Item]!
    journal: [Entry]!
    bio: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    character( characterId: ID!): Character
    characters: [Character]
  }

  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addCharacter(name: String!, image: String, characterClass: String!, level: Int!, lineage: String!, background: String, abilities: AbilitiesInput!, skills: [String], savingThrows: [String], bio: String): Character
  addSpell(characterId: ID!, name: String!, description: String!): Character
  addItem(characterId: ID!, name: String!, description: String!): Character
  addEntry(characterId: ID!, entry: String!): Character
  # // ? Mutations for edits
  updateCharacter(characterId: ID!, image: String, name: String, characterClass: String, level: Int, lineage: String, background: String, abilities: AbilitiesInput, skills: [String], savingThrows: [String], bio: String): Character
  updateSpell(characterId: ID!, spellId: ID!, name: String!, description: String!): Character
  updateItem(characterId: ID!, itemId: ID!, name: String!, description: String!): Character
  updateEntry(characterId: ID!, entryId: ID!, entry: String!): Character
  # // ? Mutations for deletion
  deleteCharacter(characterId: ID!): Character
  deleteSpell(characterId: ID!, spellId: ID!): Character
  deleteItem(characterId: ID!, itemId: ID!): Character
  deleteEntry(characterId: ID!, entryId: ID!): Character
  }
`;

module.exports = typeDefs;
