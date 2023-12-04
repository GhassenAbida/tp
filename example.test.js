const request = require('supertest');
const app = require('./index'); // Import your main app file

describe('GET /items', () => {
  it('responds with JSON', async () => {
    const response = await request(app)
      .get('/items')
      .expect('Content-Type', /json/)
      .expect(200);

    // Add more assertions as needed, depending on your actual response structure
  });
});
