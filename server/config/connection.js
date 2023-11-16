const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

const mongourl = 'mongodb+srv://admin:admin321@cluster0.nmdv2ie.mongodb.net/techmatchup?retryWrites=true&w=majority';
mongoose.connect(mongourl);

module.exports = mongoose.connection;
