const typeDefs = `
  type User {
    _id: ID
    name: String
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
    class: String!
    level: Int!
    lineage: String!
    background: String
    abilities: Abilities!
    # // TODO: Confirm how we want skills/saving throws to display.  bonus or just list of proficient skills?  potentially replace Skill with String
    skills: [Skill]
    savingThrows: [SavingThrow]
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
    user: User
    character: Character
    character: [Character]
  }

  type Mutation {
  addUser(name: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  # // TODO: Change skill inputs and saving throw inputs to match decision
  addCharacter(name: String!, class: String!, level: Int!, lineage: String!, background: String, abilities: AbilityInput!, skills: [SkillInput], savingThrows: [SavingThrowInput], bio: String): Character
  addSpell(characterId: ID!, name: String!, description: String!): Spell
  addItem(characterId: ID!, name: String!, description: String!): Item
  addEntry(characterId: ID!, entry: String!): Entry
  # // ? Mutations for edits
  updateCharacter(userId: ID!, characterId: ID!, name: String, class: String, level: Int, lineage: String, background: String, abilities: AbilityInput, skills: [SkillInput], savingThrows: [SavingThrowInput], bio: String): Character
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
