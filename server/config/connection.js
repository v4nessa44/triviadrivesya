const mongoose = require('mongoose');
const dotenve = require('dotenv');
dotenve.config({
    path: './config.env'
})

const mongourl = 'Your_mongo_db_url'
mongoose.connect(mongourl);

module.exports = mongoose.connection;
