// TODO: Create resolvers file

const { User, Character } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    character: async () => {
    },
    
    characters: async () => {
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addCharacter: async (parent, { name, characterClass, level, lineage, background, abilities, skills, savingThrows, bio }, context) => {
    },

    addSpell: async (parent, { characterId, name, description }, context) => {
    },

    addItem: async (parent, { characterId, name, description }, context) => {
    },

    addEntry: async (parent, { characterId, entry }, context) => {
    },

    updateCharacter: async (parent, { userId, characterId, name, characterClass, level, lineage, background, abilities, skills, savingThrows, bio }, context) => {
    },

    updateSpell: async (parent, { userId, spellId, name, description }, context) => {
    },

    updateItem: async (parent, { userId, itemId, name, description }, context) => {
    },

    updateEntry: async (parent, { userId, entryId, entry }, context) => {
    },

  },
};

module.exports = resolvers;
