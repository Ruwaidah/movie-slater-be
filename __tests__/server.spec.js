const server = require("../api/server.js");
const request = require("supertest");

// describe("GET /", () => {
//   it("has process .env.DB_ENV as 'testing'", () => {
//     expect(process.env.DB_ENV).toBe("testing")
//     return request(server)
//       .get("/")
//       .expect({ message: "We live" })
//       .expect(200)

//   });
// });

// // Register
// describe("POST /api/auth/register", () => {
//   let user1 = {
//     "username": "123455",
//     "password": "ruw2113432aidah",
//     "email": "1213455@gmail.com"
//   };
//   it("testing register new user:", () => {
//     return request(server)
//       .post("/api/auth/register")
//       .send(user1)
//       .expect(201)
//   });
// });

// describe("POST /api/auth/register", () => {
//   let user1 = {
//     "username": "123455",
//     "password": "ruw2113432aidah",
//     "email": "1213455@gmail.com"
//   };
//   it("testing register new user with invalid username:", () => {
//     return request(server)
//       .post("/api/auth/register")
//       .send(user1)
//       .expect(500)
//   });
// });

// // Login
// describe("POST /api/auth/login", () => {
//   let user = {
//     "password": "ruw2113432aidah",
//     "email": "1213455@gmail.com"
//   };
//   it("testing Login  user:", () => {
//     return request(server)
//       .post("/api/auth/login")
//       .send(user)
//       .expect(200)
//       .then(res => {
//         const token = res.body.token;
//         expect(res.body.token).toBe(token);
//       })
//   })
// });
// ;

// // Login with Wrong password
// describe("POST /api/auth/login", () => {
//   let user = {
//     "password": "ruw",
//     "email": "rwer@gmail.com"
//   };
//   it("testing Login with wrong password:", () => {
//     return request(server)
//       .post("/api/auth/login")
//       .send(user)
//       .expect(401)
//       .expect({ message: "Invalid Credentials" })
//   });
// });

// describe("POST /api/auth/login", () => {
//   let user = {
//     "password": "ruw2113432aidah"
//   };
//   it("testing Login with missing field:", () => {
//     return request(server)
//       .post("/api/auth/login")
//       .send(user)
//       .expect(400)
//       .expect({ message: "Please fill out all required fields" })
//   });
// });



// // Owner Login and Register

// // Register
// describe("POST /api/auth/owner/register", () => {
//   let user = {
//     username: "ruwaidah33",
//     password: "ruwaidah",
//     email: "ruwaidah33@gmail.com"
//   };
//   it("testing register owner user:", () => {
//     return request(server)
//       .post("/api/auth/owner/register")
//       .send(user)
//       .expect(201)
//       .then(res => {
//         const token = res.body.token;
//         return expect(res.body.token).toBe(token);
//       });
//   });
// });

// // describe("POST /api/auth/register", () => {
// //   let user1 = {
// //     username: "ruwaidah33",
// //     password: "ruwaidah",
// //     email: "ruwaidah33@gmail.com"
// //   };
// //   it("testing register new user with invalid info:", () => {
// //     return request(server)
// //       .post("/api/auth/owner/register")
// //       .send(user1)
// //       .expect(500)
// //   });
// // });

// // Login with Wrong password
// describe("POST api/auth/owner/login", () => {
//   let user = {
//     password: "ruwa",
//     email: "ruwaidah33@gmail.com"
//   };
//   it("testing Login with wrong password:", () => {
//     return request(server)
//       .post("/api/auth/owner/login")
//       .send(user)
//       .expect(401)
//       .expect({ message: "Invalid Credentials" })
//   });
// });

// describe("POST /api/auth/login", () => {
//   let user = {
//     "password": "ruw2113432aidah"
//   };
//   it("testing Login with missing field:", () => {
//     return request(server)
//       .post("/api/auth/owner/login")
//       .send(user)
//       .expect(400)
//       .expect({ message: "Please fill out all required fields" })
//   });
// });

// // Login
// describe("POST /api/auth/owner/login", () => {
//   let userowner = {
//     password: "ruwaidah",
//     email: "ruwaidah33@gmail.com"
//   };
//   it("testing Login  owner:", () => {
//     return request(server)
//       .post("/api/auth/owner/login")
//       .send(userowner)
//       .expect(200)

//   });
// });

// // Oauth 
// describe("POST /api/oauth/login", () => {
//   let token = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc2MmZhNjM3YWY5NTM1OTBkYjhiYjhhNjM2YmYxMWQ0MzYwYWJjOTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIh0MjAyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImEweFE4TnFhb29kOXhrbWdOTGIydWciLCJuYW1lIjoiRGF2ZSBUaG9tYXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1uU210cG1tQ2M2OC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JjUjhHOGprQkNiUmhQWFA2eUhpOGNuZGRadHdnL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJEYXZlIiwiZmFtaWx5X25hbWUiOiJUaG9tYXMiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4MjI2MzMzMCwiZXhwIjoxNTgyMjY2OTMwLCJqdGkiOiJmZjU4NzEzOGZkNTE2ODAyYTFkNjE2MWIxMjc0M2NjOGE2OGFhZjhhIn0.o-V5p3nIAEBWz6DQYmakBdS00_4fl7qd2j_-uBv1V-5vNcVUPNpdKOxN_9T4kkmC-r_GdB1L0uyJrY6A5mRTHctRTrdItE-Il10_poN4BXTwylM3XPaClwibUHIkb_etB-6jlDn2YGw8eWGO0OYR9bPgvpm6rqOhtASmH_--o8TA223fP1ZV3C4aK_v705hy6O14j4FapNQI_sSnlsfAg0QigSyqwzchsERH_jW8lcC2GUF9zIkmIaqFL6EsW3KnA5mwEnMLPW06lA04F0Ia5GArMhe7P9K4wYZTSblhXop3HVwPUHReaUSw-L8y4rdPNOmw1x925vdvkyQXgn3jHw" }
//   it("testing signup with oauth:", () => {
//     return request(server)
//       .post("/api/oauth/login")
//       .send(token)
//       .expect(201)
//   });
// });

// describe("POST /api/oauth/login", () => {
//   let token = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc2MmZhNjM3YWY5NTM1OTBkYjhiYjhhNjM2YmYxMWQ0MzYwYWJjOTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIh0MjAyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImEweFE4TnFhb29kOXhrbWdOTGIydWciLCJuYW1lIjoiRGF2ZSBUaG9tYXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1uU210cG1tQ2M2OC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JjUjhHOGprQkNiUmhQWFA2eUhpOGNuZGRadHdnL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJEYXZlIiwiZmFtaWx5X25hbWUiOiJUaG9tYXMiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4MjI2MzMzMCwiZXhwIjoxNTgyMjY2OTMwLCJqdGkiOiJmZjU4NzEzOGZkNTE2ODAyYTFkNjE2MWIxMjc0M2NjOGE2OGFhZjhhIn0.o-V5p3nIAEBWz6DQYmakBdS00_4fl7qd2j_-uBv1V-5vNcVUPNpdKOxN_9T4kkmC-r_GdB1L0uyJrY6A5mRTHctRTrdItE-Il10_poN4BXTwylM3XPaClwibUHIkb_etB-6jlDn2YGw8eWGO0OYR9bPgvpm6rqOhtASmH_--o8TA223fP1ZV3C4aK_v705hy6O14j4FapNQI_sSnlsfAg0QigSyqwzchsERH_jW8lcC2GUF9zIkmIaqFL6EsW3KnA5mwEnMLPW06lA04F0Ia5GArMhe7P9K4wYZTSblhXop3HVwPUHReaUSw-L8y4rdPNOmw1x925vdvkyQXgn3jHw" }
//   it("testing Login  oauth:", () => {
//     return request(server)
//       .post("/api/oauth/login")
//       .send(token)
//       .expect(200)

//   });
// });

// describe("POST /api/oauth/login", () => {
//   let token = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc2MmZhNjM3YWY5NTM1OTBkYjhiYjhhNjM2YmYxMWQ0MzYwYWJjOTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwesfewIjoiMTA1ODg0ODcwNzI5Ny1uMnJsNGIzMDFpdnEwZ2lwbzJwYmVucjgwc2E1bXRwMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwNTg4NDg3MDcyOTctbjJybDRiMzAxaXZxMGdpcG8ycGJlbnI4MHNhNW1werfwefw0cDIuYXBwcy5nb29nbGV1ewfc2VyY29udGVudC5jb20iLCJzdWIiOiIxMTI3MzMzMTk5NTAwMDc3Mjc4NjAiLCJlbWFpbCI6Im1vdmlla25pZ2h0MjAyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImpTZnB2SFZZcmowM2swVlhnd1hDWmciLCJuYW1lIjoiRGF2ZSBUaG9tYXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1uU210cG1tQ2M2OC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JjUjhHOGprQkNiUmhQWFA2eUhpOGNuZGRadHdnL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJEYXZlIiwiZmFtaWx5X25hbWUiOiJUaG9tYXMiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4MTk1OTQ0OSwiZXhwIjoxNTgxOTYzMDQ5LCJqdGkiOiI0YjVhZTg4NjMwYTc5MDk4NmZhZDg1YTBlN2QyNWQ0OGJhYjZlZjQ2In0.HFlqw7C3vxbsWj0ZETVi5WA9x17at43yXhTe01Gg5i5I-pKKjFmXf98dLxo6U7Lf6L5GgjHYnzCUcXAOTq8PIqKO6dbse6_w2JN1ELZFI4qIiIdNU1LHJeGL97iYhNig5fPa_wVHESv1KMyzBpBVbvfgqKRTmewrV8jsVRp7_RLo3zZTqbsaWIXWZuxFj8bJWVK5_40QLm6UPL9fqN88jCCafBAEjXGFTfmXLFL3Wslv-OKD4euReptzFrEFHW1ZNy7XMqfuzaPJBtu_pmeYirLwhB-vhw04gh4e69RrTk-hykSndcFnkCqYbLbjMLAo3hXAUIYpPn5g7pfyUmmOyw" }
//   it("testing Login with oauth invalid token:", () => {
//     return request(server)
//       .post("/api/oauth/login")
//       .send(token)
//       .expect(401)
//       .expect({ message: "invalid Token" })
//   });
// });
jest.setTimeout(5000);

// Get all Movies
describe("GET /api/movies", () => {
  // jest.retryTimes(5);
  it("testing Getting All movies:", async () => {
    const res = await request(server)
      .get("/api/movies")
    expect(res.statusCode).toEqual(200)
  });
});

jest.setTimeout(5000);

// Get Movie Details
describe("POST /api/movies/moviedetails", () => {
  title = { title: "1917" };
  it("testing Getting movie details:", async (done) => {
    const res = await request(server)
      .post("/api/movies/moviedetails")
      .send(title)
    expect(res.statusCode).toEqual(200)
  });
});

// // Coming Movies
describe("GET /api/upcoming", () => {
  it("testing Getting upcoming movies:", async () => {
    const res = await request(server)
      .get("/api/upcoming")
      .expect(200)
    expect(Array.isArray(res.body)).toBe(true)
  });
});



// Seats
describe("GET /api/seats", () => {
  it("testing seating :", (done) => {
    return request(server)
      .get("/api/seats")
      .expect(200)
      .end(done)
  })

});



// Get Movie Details
// describe("POST /filtermovies", () => {
//   data = {
//     movies: ['MV011853110000'],
//     times: ["9-11 AM"],
//     days: ["2020-02-25"]
//   }
//   it("testing filtering movies:", () => {
//     return request(server)
//       .post("/api/filtermovies", data)
//       .expect(500)
//       .end()
//   });
// });