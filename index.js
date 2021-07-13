'use strict';

// mongoose is the connector between our app and the MongoDB database
const mongoose = require('mongoose');
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // always pass in these values
require('dotenv').config();
const MONGODB_URI=process.env.MONGODB_URI;

const server = require('./src/server.js');

// starts the server after connecting to the db
mongoose.connect(MONGODB_URI, options)
  .then(() => server.start(server.PORT))
  .catch(err => console.error(err));
