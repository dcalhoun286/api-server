'use strict';

const express = require('express');
const dogsRouter = express.Router();
const validator = require('../middleware/validator.js');
const dogsCollection = require('../models/dogs-collection.js');
const dogsModel = require('../models/dogsModel.js');
const dogs = new dogsCollection(dogsModel);

// routes

dogsRouter.get('/dogs', getDogs);
dogsRouter.get('/dogs/:id', getOneDogItem);
dogsRouter.post('/dogs', createDogItem);
dogsRouter.put('/dogs/:id', updateDogItem);
dogsRouter.delete('/dogs/:id', deleteDogItem);

// route callbacks

async function getDogs(req, res) {
  const result = await dogs.get();
  res.status(200).json(result);
}

async function getOneDogItem (req, res) {
  const result = await dogs.get(req.params.id);
  res.status(200).json(result);
}

async function createDogItem (req, res) {
  const result = await dogs.create(req.body);
  res.status(201).json(result);
}

async function updateDogItem (req, res) {
  const result = await dogs.update(req.params.id, req.body);
  res.status(200).json(result);
}

async function deleteDogItem (req, res) {
  const result = await dogs.delete(req.params.id);
  res.status(204).send(result);
}

module.exports = dogsRouter;
