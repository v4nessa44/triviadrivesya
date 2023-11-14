const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { Tech, GameHistory } = require('../models');

const techData = require('./techData.json');

const historyData = require('./historyData.json');


db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await cleanDB('GameHistory', 'gamehistories')

  await Tech.insertMany(techData);

  
  await GameHistory.insertMany(historyData);

  console.log('Technologies seeded!');
  process.exit(0);
});
