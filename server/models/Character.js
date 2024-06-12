const {
  abilitySchema,
  spellSchema,
  itemSchema,
  entrySchema
} = require('./schemas')
const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
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
  skills: [ String ],
  savingThrows: [ String ],
  spells: [ spellSchema ],
  items: [ itemSchema ],
  journal: [ entrySchema ],
  bio: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Character = model('Character', characterSchema);

module.exports = Character;
