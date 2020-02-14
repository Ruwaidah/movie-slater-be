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
  let user1 = {
    username: "123451",
    password: "123451",
    email: "123451@test.com"
  };
  it("testing register new user::", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user1)
      .expect(201);
  });
});

// Login
describe("POST /api/auth/login", () => {
  let user = {
    password: "1234",
    email: "1234@test.com"
  };
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

// Owner Login and Register

// Register
describe("POST /api/auth/owner/register", () => {
  let user = {
    username: "112",
    password: "112",
    email: "112@test.com"
  };
  it("testing register owner user:", () => {
    return request(server)
      .post("/api/auth/owner/register")
      .send(user)
      .expect(201)
      .then(res => {
        const token = res.body.token;
        expect(res.body.token).toBe(token);
      });
  });
});

// Login
describe("POST /api/auth/owner/login", () => {
  let user = {
    email: "12@test.com",
    password: "12"
  };
  it("testing Login  oauth user:", () => {
    return request(server)
      .post("/api/auth/owner/login")
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
        expect(201);
      });
  });
});

// Get Movie Details
// describe("POST /api/movies/moviedetails", () => {
//   title = { title: "19efewrfw1wd7" };
//   it("testing Getting movie details:", () => {
//     return request(server)
//       .post("/api/movies/moviedetails", title)
//       .expect(200)
//       .then(res => {
//         expect(Array.isArray(res.body)).toBe(true);
//         expect(201);
//       });
//   });
// });
