const mongoose = require('mongoose');

let mongoDB = `<YOUR CONNECTION STRING GOES HERE`;

////EXAMPLE////
//`mongodb+srv://<your mongodb atlas user name>:<your connection string>/<your collection name>?retryWrites=true&w=majority`

//HOW DO I GET THE CONNECTION STRING?
//https://www.mongodb.com/docs/guides/atlas/connection-string/

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
