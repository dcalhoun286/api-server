'use strict';

const model = require('./dogsModel.js');

class DogsCollection {

  constructor() {
    this.model = model;
  }

  get(_id) {
    return _id ? this.model.findOne({ _id }) : this.model.find({});
  }

  create(record) {
    let newRecord = new this.model(record);

    try {
      newRecord.save();
    } catch {
      res.status();
    }
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }

  deleteAll() {
    return this.model.deleteMany({});
  }
}

module.exports = DogsCollection;
