'use strict';

// 3rd party dependencies

require('dotenv').config();
const express = require('express');
const app = express();

// internal modules

const notFoundHandler = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');

// Router modules

const dogsRoutes = require('./routes/dogs.js');
const clothesRoutes = require('./routes/clothes.js');

// Express Global Middleware

app.use(express.json());

// Our own Global Middleware

app.use(logger);

// use the routes from the routing module
app.use(dogsRoutes);
app.use(clothesRoutes);

app.get('/', getHomePage);

function getHomePage(req, res) {
  let outputObj = {
    route: 'homepage',
  };

  res.status(200).json(outputObj);
}

// error handling middleware

app.use('*', notFoundHandler);

const start = (port) => {
  if (!port) { throw new Error ('Missing Port');}
  app.listen(port, () => console.log(`Server up on port ${port}`));
};

module.exports = {
  server: app,
  start: start,
};
