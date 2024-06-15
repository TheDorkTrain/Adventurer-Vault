const {
  abilitySchema,
  spellSchema,
  itemSchema,
  featSchema,
  entrySchema
} = require('./schemas')
const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  characterClass: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true
  },
  lineage: {
    type: String,
    required: true
  },
  abilities: {
    type: abilitySchema,
    required: true
  },
  skills: String,
  savingThrows: String,
  spells: [ spellSchema ],
  items: [ itemSchema ],
  feats: [ featSchema ],
  journal: [ entrySchema ],
  bio: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Character = model('Character', characterSchema);

module.exports = Character;
