const server = require("./server.js");
const request = require("supertest");
const axios = require("axios");

describe("GET /", () => {
  it("has process .env.DB_ENV as 'development'", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("POST /api/auth/register", () => {
  let user = {
    username: "testing",
    password: "testing",
    email: "testing@test.com"
  };
  it("testing register new user::", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user)
      .expect(200);
  });
});
