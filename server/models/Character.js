// TODO: Finish Character model
// TODO: ?skillsSchema?, ?savingthrowSchema?
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
    minlength: 1,
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
  // TODO: Edit after decision made
  skils: [ skillSchema ],
  savingThrows: [ savingThrowSchema ],
  spells: [ spellSchema ],
  items: [ itemSchema ],
  journal: [ entrySchema ],
  bio: String
});

const Character = model('Character', characterSchema);

module.exports = Character;
