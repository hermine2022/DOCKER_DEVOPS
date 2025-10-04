const request = require("supertest");
const app = require("../app"); // importer l'instance Express

describe("Test endpoint /", () => {
  it("should return 200 and Hello message", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello Docker by hermine silue  + CI/CD!');
  });
});
