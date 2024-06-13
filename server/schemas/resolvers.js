const { User, Character } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return await User.findById(context.user._id).populate('characters');
    },

    character: async (parent, { characterId }) => {
      return await Character.findById(characterId).populate('abilities').populate('skills').populate('savingThrows').populate('spells').populate('items').populate('journal');
    },
    
    characters: async () => {
      // TODO: Populate?  What needs to be displayed?
      return await Character.find();
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
        return await Character.findOneAndUpdate(
          { _id: characterId },
          { $addToSet: { spells: { name, description } } },
          { new: true }
        ).populate('spells');
      }
      throw AuthenticationError;
    },

    addItem: async (parent, { characterId, name, description }, context) => {
      if (context.user) {
        return await Character.findOneAndUpdate(
          { _id: characterId },
          { $addToSet: { items: { name, description } } },
          { new: true }
        ).populate('items');
      }
      throw AuthenticationError;
    },

    addEntry: async (parent, { characterId, entry }, context) => {
      if (context.user) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $addToSet: { journal: { entry } } },
          { new: true }
        ).populate('journal');
      }
      throw AuthenticationError;
    },

    updateCharacter: async (parent, args, context) => {
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

    updateSpell: async (parent, args, context) => {
      const updateObject = { _id: args.spellId };
      for (const [key, value] of Object.entries(args)) {
        if (value && !key.endsWith('Id')) {
          updateObject[key] = value;
        }
      }

      const character = await Character.findById(args.characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: args.characterId },
          { $set: { "spells.$[spell]": { ...updateObject } } },
          { arrayFilters: [ { "spell._id": args.spellId } ] , new: true, runValidators: false }
        ).populate('spells');
      }
      throw AuthenticationError;
    },

    updateItem: async (parent, args, context) => {
      const updateObject = { _id: args.itemId };
      for (const [key, value] of Object.entries(args)) {
        if (value && !key.endsWith('Id')) {
          updateObject[key] = value;
        }
      }
      
      const character = await Character.findById(args.characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: args.characterId },
          { $set: { "items.$[item]": { ...updateObject } } },
          { arrayFilters: [ { "item._id": args.itemId } ] , new: true, runValidators: false }
        ).populate('items');
      }
      throw AuthenticationError;
    },

    updateEntry: async (parent, { characterId, entryId, entry }, context) => {
      const character = await Character.findById(characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $set: { "journal.$[entry]": { _id: entryId, entry } } },
          { arrayFilters: [ { "entry._id": entryId } ] , new: true, runValidators: true }
        ).populate('journal');
      }
      throw AuthenticationError;
    },

    deleteCharacter: async (parent, { characterId }, context) => {
      const character = await Character.findById(characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findByIdAndDelete(characterId);
      }
      throw AuthenticationError;
    },

    deleteSpell: async (parent, { characterId, spellId }, context) => {
      const character = await Character.findById(characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $pull: { spells: { _id: spellId } } },
          { new: true, runValidators: true }
        ).populate('spells');
      }
      throw AuthenticationError;
    },

    deleteItem: async (parent, { characterId, itemId }, context) => {
      const character = await Character.findById(characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $pull: { items: { _id: itemId } } },
          { new: true, runValidators: true }
        ).populate('items');
      }
      throw AuthenticationError;
    },

    deleteEntry: async (parent, { characterId, entryId }, context) => {
      const character = await Character.findById(characterId);

      if (context.user?._id === character.user.toString()) {
        return Character.findOneAndUpdate(
          { _id: characterId },
          { $pull: { journal: { _id: entryId } } },
          { new: true, runValidators: true }
        ).populate('journal');
      }
      throw AuthenticationError;
    },


  },
};

module.exports = resolvers;
