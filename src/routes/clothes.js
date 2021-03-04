'use strict';

const express = require('express');

const clothesRouter = express.Router();

// routes

clothesRouter.get('/clothes', getClothes);

// route callbacks

function getClothes(req, res) {
  res.status(200).json({ 'route': '/clothes' });
}

module.exports = clothesRouter;
