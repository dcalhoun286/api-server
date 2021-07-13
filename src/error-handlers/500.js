'use strict';

function serverError500 (err, req, res, next) {

  console.error('(STATUS 500 ERROR)', err);
  const errorObj = {
    status: 500,
    message: 'something broke',
  };

  res.status(500).json(errorObj);
}

module.exports = serverError500;
