// TODO: Create resolvers file

const { User, Character } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return await User.findById(context.user._id).populate('characters');
    },

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

    addCharacter: async (parent, args, context) => {
      if (context.user) {
        const character = await Character.create({
          ...args,
          user: context.user._id
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { characters: character._id } }
        );

        return character;
      }
      throw AuthenticationError;
    },

    addSpell: async (parent, { characterId, name, description }, context) => {
      if (context.user) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $addToSet: { spells: { name, description } } },
          { new: true }
        )
      }
      throw AuthenticationError
    },

    addItem: async (parent, { characterId, name, description }, context) => {
      if (context.user) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $addToSet: { items: { name, description } } },
          { new: true }
        )
      }
      throw AuthenticationError
    },

    addEntry: async (parent, { characterId, entry }, context) => {
      if (context.user) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $addToSet: { spells: { entry } } },
          { new: true }
        )
      }
      throw AuthenticationError
    },

    updateCharacter: async (parent, args, context) => {
      // args = { characterId, name, characterClass, level, lineage, background, abilities, skills, savingThrows, bio }
      const updateObject = {};
      for (const [key, value] of Object.entries(args)) {
        if (value && !key.endsWith('Id')) {
          updateObject[key] = value;
        }
      }

      const character = await Character.findById(args.characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: args.characterId },
          { ...updateObject },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError;
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
