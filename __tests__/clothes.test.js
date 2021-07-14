'use strict';

const mongoose = require('mongoose');

const ClothesModel = require('../src/models/clothesModel.js');
const clothesData = { type: 'sweater', color: 'olive' }
const clothesItem = new ClothesModel(clothesData);

describe('====== Clothes ======', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('can successfully create and save a clothing record to the database', async () => {
    const savedClothesItem = await clothesItem.save();
    expect(savedClothesItem._id).toBeDefined();
    expect(savedClothesItem.type).toBe(clothesData.type);
    expect(savedClothesItem.color).toBe(clothesData.color);
  });

});