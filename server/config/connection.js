const mongoose = require('mongoose');
require('dotenv').config()

const mongourl = process.env.MONGODB_URI
mongoose.connect(mongourl);

module.exports = mongoose.connection;