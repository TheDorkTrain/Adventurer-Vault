const { Schema } = require('mongoose')

const abilitySchema = new Schema({
  str:{
    type: Number,
    required: true
  },
  dex:{
    type: Number,
    required: true
  },
  con:{
    type: Number,
    required: true
  },
  int:{
    type: Number,
    required: true
  },
  wis:{
    type: Number,
    required: true
  },
  cha:{
    type: Number,
    required: true
  }
});

const spellSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
const featSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const entrySchema = new Schema({
  entry: {
    type: String,
    required: true
  }
});

module.exports = { abilitySchema, spellSchema, itemSchema, entrySchema, featSchema }