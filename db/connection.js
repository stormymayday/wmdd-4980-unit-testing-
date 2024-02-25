const mongoose = require("mongoose");
require("dotenv").config();

let mongoDB = process.env.CONNECTION_STRING;

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
