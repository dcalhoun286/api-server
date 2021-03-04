'use strict';

require('dotenv').config();

const server = require('./src/server.js');

// starts the server
server.start(server.PORT);
