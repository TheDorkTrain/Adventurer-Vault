const db = require('../config/connection');
const { User, Character } = require('../models');
const userSeeds = require('./userSeeds.json');
const characterSeeds = require('./characterSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await cleanDB('Character', 'characters'); 

  await User.create(userSeeds);
  
  const characters = await Character.create(characterSeeds);

  const newUser = await User.findOneAndUpdate(
    { _id: characters[0].user },
    { $addToSet: { characters: characters[0]._id } },
    {new:true}
  )

  console.log('all done!');
  process.exit(0);
});
