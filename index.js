'use strict';

require('dotenv').config();

const server = require('./src/server.js');

// internal constants

const PORT = process.env.PORT || 3333;

// starts the server
server.start(PORT);
