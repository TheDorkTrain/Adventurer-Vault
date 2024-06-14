// TODO: Create entire seeds folder
const db = require('../config/connection');
const { User, Character } = require('../models');
const userSeeds = require('./userSeeds.json');
const characterSeeds = require('./characterSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Thought', 'thoughts');
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});
