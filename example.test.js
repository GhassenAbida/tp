const request = require('supertest');
const app = require('./app'); // Import the Express app

describe('GET /items', () => {
  it('responds with JSON', async () => {
    const response = await request(app).get('/items');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    // Add more assertions as needed, depending on your actual response structure
  });
});

