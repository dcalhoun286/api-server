'use strict';

const mongoose = require('mongoose');

const dogsSchema = mongoose.Schema({
  // constraints go here
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, min: 0, max: 30, required: true },
});

const dogsModel = mongoose.model('dogs', dogsSchema);

module.exports = dogsModel;
