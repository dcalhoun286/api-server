'use strict';

const express = require('express');

const dogsRouter = express.Router();

// routes

dogsRouter.get('/dogs', getDogs);

// route callbacks

function getDogs(req, res) {
  res.status(200).json({ 'route': '/dogs' });
}

module.exports = dogsRouter;
