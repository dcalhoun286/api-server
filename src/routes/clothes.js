'use strict';

const express = require('express');
const clothesRouter = express.Router();
const validator = require('../middleware/validator.js');
const clothesCollection = require('../models/data-collection.js');
const clothesModel = require('../models/clothesModel.js');
const clothes = new clothesCollection(clothesModel);

// routes

clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothingItem);
clothesRouter.post('/clothes', createClothingItem);
clothesRouter.put('/clothes/:id', updateClothingItem);
clothesRouter.delete('/clothes/:id', deleteClothingItem);

// route callbacks

async function getClothes(req, res) {
  const result = await clothes.get();
  res.status(200).json(result);
}

async function getOneClothingItem(req, res) {
  const result = await clothes.get(req.params.id);
  res.status(200).json(result);
}

async function createClothingItem(req, res) {
  const result = await clothes.create(req.body);
  res.status(201).json(result);
}

async function updateClothingItem(req, res) {
  const result = await clothes.update(req.params.id, req.body);
  res.status(200).json(result);
}

async function deleteClothingItem(req, res) {
  const result = await clothes.delete(req.params.id);
  res.status(204).send(result);
}

module.exports = clothesRouter;
