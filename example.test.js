const request = require('supertest');
const app = require('./src/index'); // Import your main app file

describe('Items API', () => {
  describe('GET /items', () => {
    let response;

    beforeAll(async () => {
      response = await request(app).get('/items');
    });

    it('should respond with a 200 status code', async () => {
      expect(response.statusCode).toBe(200);
    });

    it('should have a content-type of JSON', async () => {
      expect(response.headers['content-type']).toMatch(/json/);
    });

    it('should return an array', async () => {
      expect(Array.isArray(response.body)).toBeTruthy();
    });

    // More detailed tests can be added here
  });

  // Additional routes can be tested here
});
