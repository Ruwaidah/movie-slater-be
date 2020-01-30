const server = require("./server.js");
const request = require("supertest");
const axios = require("axios");

describe("GET /", () => {
  it("has process .env.DB_ENV as 'development'", () => {
    expect(process.env.DB_ENV).toBe("development");
  });
});

// Register
describe("POST /api/auth/register", () => {
  let user = {
    username: "tes11",
    password: "tes11",
    email: "tes11@test.com"
  };
  it("testing register new user::", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user)
      .expect(500);
  });
});

// Login
describe("POST /api/auth/login", () => {
  let user = { email: "tes@test.com", password: "tes" };
  it("testing Login  user:", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(200)
      .then(res => {
        const token = res.body.token;
        expect(res.body.token).toBe(token);
      });
  });
});

// Get all Movies
describe("GET /api/movies", () => {
  it("testing Getting All movies:", () => {
    return request(server)
      .get("/api/movies")
      .expect(200)
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(200);
      });
  });
});
