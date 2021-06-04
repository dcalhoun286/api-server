'use strict';

require('@code-fellows/supergoose');

const Clothes = require('../src/models/data-collection.js');
const clothes = new Clothes();

describe('Clothes Collection', () => {
 
  it('can create a new clothes item', () => {
    let testClothes = { type: 'test clothes item', color: 'purple' };
    let expected = { type: 'test clothes item', color: 'purple' };

    return clothes.create(testClothes)
      .then(record => {
        console.log('test clothes item from DB', record);
        Object.keys(testClothes).forEach(key => {
          expected(record[key]).toEqual(expected[key]);
        });
      });
  });

  it('can get a clothes item', () => {
    let testClothes = { type: 'test clothes item', color: 'purple' };
    let expected = { type: 'test clothes item', color: 'purple' };

    return clothes.create(testClothes)
      .then(record => {
        return clothes.get(record._id)
          .then(item => {
            Object.keys(testClothes).forEach(key => {
              expected(item[key]).toEqual(expected[key]);
            });
          });
      });
  });

});
