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
    name: String
    description: String
  }

  type Item {
    name: String
    description: String
  }

  type Entry {
    entry: String
  }

  type Character {
    _id: ID
    name: String!
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
    character: Character
    characters: [Character]
  }

  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addCharacter(name: String!, characterClass: String!, level: Int!, lineage: String!, background: String, abilities: AbilitiesInput!, skills: [String], savingThrows: [String], bio: String): Character
  addSpell(characterId: ID!, name: String!, description: String!): Spell
  addItem(characterId: ID!, name: String!, description: String!): Item
  addEntry(characterId: ID!, entry: String!): Entry
  # // ? Mutations for edits
  updateCharacter(userId: ID!, characterId: ID!, name: String, characterClass: String, level: Int, lineage: String, background: String, abilities: AbilitiesInput, skills: [String], savingThrows: [String], bio: String): Character
  updateSpell(userId: ID!, spellId: ID!, name: String, description: String): Spell
  updateItem(userId: ID!, itemId: ID!, name: String, description: String): Item
  updateEntry(userId: ID!, entryId: ID!, entry: String!): Entry
  # // ? Mutations for deletion
  deleteCharacter(userId: ID!, characterId: ID!): Character
  deleteSpell(userId: ID!, characterId: ID!, spellId: ID!): Spell
  deleteItem(userId: ID!, characterId: ID!, itemId: ID!): Item
  deleteEntry(userId: ID!, characterId: ID!, entryId: ID!): Entry
  }
`;

module.exports = typeDefs;
