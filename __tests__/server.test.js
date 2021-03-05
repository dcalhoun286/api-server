'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockReq = supertest(server);

describe('====== SERVER ======', () => {
  it('returns a status 200 when visiting the homepage', async () => {
    const result = await mockReq.get('/');
    expect(result.status).toBe(200);
  });

  it('returns a status 404 when the route doesn\'t exist', async () => {
    const result = await mockReq.get('/doesnt-exist');
    expect(result.status).toBe(404);
  });

  it('returns a status 404 when using a bad method', async () => {
    const result = await mockReq.post('/');
    expect(result.status).toBe(404);
  });

  it('returns a status 200 when visiting \'/clothes\' route', async () => {
    const result = await mockReq.get('/clothes');
    expect(result.status).toBe(200);
  });

  it('can create a new record on \'/clothes\' route', async () => {
    let responseObj = { type: 'shirt', color: 'rainbow' };
    let response = await mockReq.post('/clothes').send(responseObj);

    expect(response.status).toBe(201);
    expect(response.body.id).toBe(1);
    expect(response.body.record.type).toBe('shirt');
  });

  it('can read a single record on \'/clothes\' route', async () => {
    let responseObj = { type: 'shirt', color: 'rainbow' };
    let response1 = await mockReq.post('/clothes').send(responseObj);
    let response2 = await mockReq.get(`/clothes/${response1.body.id}`);
    expect(response2.status).toBe(200);
  });

  it('can udpate a single record on \'/clothes\' route', async () => {
    let responseObj1 = { type: 'shirt', color: 'rainbow' };
    let responseObj2 = { type: 'blouse' };
    let response1 = await mockReq.post('/clothes').send(responseObj1);
    let response2 = await mockReq.put(`/clothes/${response1.body.id}`).send(responseObj2);
    expect(response2.status).toBe(200);
    expect(response2.body.type).toBe('blouse');
  });

  it('can destroy a record on \'/clothes\' route', async () => {
    let responseObj = { type: 'shirt', color: 'rainbow' };
    let response1 = await mockReq.post('/clothes').send(responseObj);
    let response2 = await mockReq.delete(`/clothes/${response1.body.id}`);
    expect(response2.status).toBe(204);
    expect(response2.body.id).toBeFalsy();
  });

  it('returns a status 200 when visiting \'/dogs\' route', async () => {
    const result = await mockReq.get('/dogs');
    expect(result.status).toBe(200);
    expect(Array.isArray(result.body)).toBeTruthy();
  });
});