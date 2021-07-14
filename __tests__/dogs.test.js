'use strict';

const mongoose = require('mongoose');

const DogsModel = require('../src/models/dogsModel.js');
const dogsData = { name: 'Louie', breed: 'husky', age: '3' }
const dogsItem = new DogsModel(dogsData);

describe('====== Dogs ======', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true, useCreateIndex: true
    }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('can successfully create and save a dog record to the database', async () => {
    const savedDogsItem = await dogsItem.save();
    expect(savedDogsItem._id).toBeDefined();
    expect(savedDogsItem.name).toBe(dogsData.name);
    expect(savedDogsItem.breed).toBe(dogsData.breed);
    expect(savedDogsItem.age).toBe(parseInt(dogsData.age));
  });
});