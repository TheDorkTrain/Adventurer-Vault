const db = require('../config/connection');
const { User, Character } = require('../models');
const userSeeds = require('./userSeeds.json');
const characterSeeds = require('./characterSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await cleanDB('Character', 'characters'); 

  await User.create(userSeeds);
  
  await Character.create(characterSeeds);

  console.log('all done!');
  process.exit(0);
});
