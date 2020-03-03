const server = require("../api/server.js");
const request = require("supertest");

describe("GET /", () => {
  it("has process .env.DB_ENV as 'development'", () => {
    expect(process.env.DB_ENV).toBe("development")
    return request(server)
      .get("/")
      .expect({ message: "We live" })
      .expect(200)

  });
});

// // Register
describe("POST /api/auth/register", () => {
  let user1 = {
    "username": "123455",
    "password": "ruw2113432aidah",
    "email": "1213455@gmail.com"
  };
  it("testing register new user:", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user1)
      .expect(201)
  });
});

describe("POST /api/auth/register", () => {
  let user1 = {
    "username": "123455",
    "password": "ruw2113432aidah",
    "email": "1213455@gmail.com",
    "zipcode": "1234"
  };
  it("testing register new user with invalid username:", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user1)
      .expect(500)
  });
});

// // Login
describe("POST /api/auth/login", () => {
  let user = {
    "password": "ruw2113432aidah",
    "email": "1213455@gmail.com"
  };
  it("testing Login  user:", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(200)
      .then(res => {
        const token = res.body.token;
        expect(res.body.token).toBe(token);
      })
  })
});

// // Login with Wrong password
describe("POST /api/auth/login", () => {
  let user = {
    "password": "ruw",
    "email": "rwer@gmail.com"
  };
  it("testing Login with wrong password:", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(401)
      .expect({ message: "Invalid Credentials" })
  });
});

describe("POST /api/auth/login", () => {
  let user = {
    "password": "ruw2113432aidah"
  };
  it("testing Login with missing field:", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(400)
      .expect({ message: "Please fill out all required fields" })
  });
});


// // Oauth 
describe("POST /api/oauth/login", () => {
  let token = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3ZDU1ZmY0ZTEwOTkxZDZiMGVmZDM5MmI5MWEzM2U1NGMwZTIxOGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA1ODg0ODcwNzI5Ny1uMnJsNGIzMDFpdnEwZ2lwbzJwYmVucjgwc2E1bXRwMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwNTg4NDg3MDcyOTctbjJybDRiMzAxaXZxMGdpcG8ycGJlbnI4MHNhNW10cDIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDg1OTkxNzk5MTY1MDYxMzIxMTYiLCJlbWFpbCI6InJ1d2FpZGFoLnJpeWFkaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ind4bWxHUldpWWpYWDEta3pTVXhaT3ciLCJuYW1lIjoiUnV3YWlkYWggQWxmYWtocmkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2c0ZTB6d3N2bEJLcV8yTmlWeWlBOE5NX2RfSmZaNlMtOVV1NjhuRGc9czk2LWMiLCJnaXZlbl9uYW1lIjoiUnV3YWlkYWgiLCJmYW1pbHlfbmFtZSI6IkFsZmFraHJpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1ODMyNTQzMjEsImV4cCI6MTU4MzI1NzkyMSwianRpIjoiMDVhYjA3Yzc2NzZjYjU2OTk3ZmEzZTYwM2UzOTMyOGM0MDAyM2Y0NiJ9.LckUvWn0TnKQBVHNiqMMofKiwULbGEL1zROEbNF76wI5yIeItxcAWhYZ-SC3MVUVP2HoJ3TkVKvreHDkMsJvx6qHHnUAFZC-o0NXSJxpcGnMcBR94jru8uvOM0GISNX3GSz38h1dTjVVcTNjVXMKZiAZrH8a-24kVkmgsWqfiHNcZt2-kF-xtwWLUddp3fOP-sMjc573QleSkk_6lNL5k2SwiHY7loYC8A5SVg3_pmYfDJ9ShjIkW-WiQRbHilnyGmt8ZJMH9iQtTB2-dLRUhda1aW6TTjjSmevZbVarVYVcjdOlK9MgPM-Q4ZnXc9pKTyrvzb9FIvxpOs0RyQAGIA" }
  it("testing signup with oauth:", () => {
    return request(server)
      .post("/api/oauth/login")
      .send(token)
      .expect(201)
  });
});

describe("POST /api/oauth/login", () => {
  let token = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3ZDU1ZmY0ZTEwOTkxZDZiMGVmZDM5MmI5MWEzM2U1NGMwZTIxOGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA1ODg0ODcwNzI5Ny1uMnJsNGIzMDFpdnEwZ2lwbzJwYmVucjgwc2E1bXRwMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwNTg4NDg3MDcyOTctbjJybDRiMzAxaXZxMGdpcG8ycGJlbnI4MHNhNW10cDIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDg1OTkxNzk5MTY1MDYxMzIxMTYiLCJlbWFpbCI6InJ1d2FpZGFoLnJpeWFkaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ind4bWxHUldpWWpYWDEta3pTVXhaT3ciLCJuYW1lIjoiUnV3YWlkYWggQWxmYWtocmkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2c0ZTB6d3N2bEJLcV8yTmlWeWlBOE5NX2RfSmZaNlMtOVV1NjhuRGc9czk2LWMiLCJnaXZlbl9uYW1lIjoiUnV3YWlkYWgiLCJmYW1pbHlfbmFtZSI6IkFsZmFraHJpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1ODMyNTQzMjEsImV4cCI6MTU4MzI1NzkyMSwianRpIjoiMDVhYjA3Yzc2NzZjYjU2OTk3ZmEzZTYwM2UzOTMyOGM0MDAyM2Y0NiJ9.LckUvWn0TnKQBVHNiqMMofKiwULbGEL1zROEbNF76wI5yIeItxcAWhYZ-SC3MVUVP2HoJ3TkVKvreHDkMsJvx6qHHnUAFZC-o0NXSJxpcGnMcBR94jru8uvOM0GISNX3GSz38h1dTjVVcTNjVXMKZiAZrH8a-24kVkmgsWqfiHNcZt2-kF-xtwWLUddp3fOP-sMjc573QleSkk_6lNL5k2SwiHY7loYC8A5SVg3_pmYfDJ9ShjIkW-WiQRbHilnyGmt8ZJMH9iQtTB2-dLRUhda1aW6TTjjSmevZbVarVYVcjdOlK9MgPM-Q4ZnXc9pKTyrvzb9FIvxpOs0RyQAGIA" }
  it("testing Login  oauth:", () => {
    return request(server)
      .post("/api/oauth/login")
      .send(token)
      .expect(200)

  });
});

describe("POST /api/oauth/login", () => {
  let token = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc2MmZhNjM3YWY5NTM1OTBkYjhiYjhhNjM2YmYxMWQ0MzYwYWJjOTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwesfewIjoiMTA1ODg0ODcwNzI5Ny1uMnJsNGIzMDFpdnEwZ2lwbzJwYmVucjgwc2E1bXRwMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwNTg4NDg3MDcyOTctbjJybDRiMzAxaXZxMGdpcG8ycGJlbnI4MHNhNW1werfwefw0cDIuYXBwcy5nb29nbGV1ewfc2VyY29udGVudC5jb20iLCJzdWIiOiIxMTI3MzMzMTk5NTAwMDc3Mjc4NjAiLCJlbWFpbCI6Im1vdmlla25pZ2h0MjAyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImpTZnB2SFZZcmowM2swVlhnd1hDWmciLCJuYW1lIjoiRGF2ZSBUaG9tYXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1uU210cG1tQ2M2OC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JjUjhHOGprQkNiUmhQWFA2eUhpOGNuZGRadHdnL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJEYXZlIiwiZmFtaWx5X25hbWUiOiJUaG9tYXMiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4MTk1OTQ0OSwiZXhwIjoxNTgxOTYzMDQ5LCJqdGkiOiI0YjVhZTg4NjMwYTc5MDk4NmZhZDg1YTBlN2QyNWQ0OGJhYjZlZjQ2In0.HFlqw7C3vxbsWj0ZETVi5WA9x17at43yXhTe01Gg5i5I-pKKjFmXf98dLxo6U7Lf6L5GgjHYnzCUcXAOTq8PIqKO6dbse6_w2JN1ELZFI4qIiIdNU1LHJeGL97iYhNig5fPa_wVHESv1KMyzBpBVbvfgqKRTmewrV8jsVRp7_RLo3zZTqbsaWIXWZuxFj8bJWVK5_40QLm6UPL9fqN88jCCafBAEjXGFTfmXLFL3Wslv-OKD4euReptzFrEFHW1ZNy7XMqfuzaPJBtu_pmeYirLwhB-vhw04gh4e69RrTk-hykSndcFnkCqYbLbjMLAo3hXAUIYpPn5g7pfyUmmOyw" }
  it("testing Login with oauth invalid token:", () => {
    return request(server)
      .post("/api/oauth/login")
      .send(token)
      .expect(401)
      .expect({ message: "invalid Token" })
  });
});
jest.setTimeout(1000);

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


jest.setTimeout(5000);

// Get Movie Details
describe("POST /filtermovies", () => {
  jest.setTimeout(1000);

  it("testing filtering movies:", () => {
    return request(server)
      .post("/api/filtermovies")
      .send({
        movies: ["MV012052110000"],
        times: ["3-5 PM", "6-8 PM", "9-Midnight"],
        days: ["03/05",
          "Thursday",
          "2020-03-05"]
      })
      .expect(200)
  });
});


jest.setTimeout(5000);

// Get theater - router
describe("GET /theaters", () => {
  jest.setTimeout(5000);
  data = {
    theatres: ['5938']
  }
  it("testing theaters movies:", () => {
    return request(server)
      .post("/api/theaters")
      .send(data)
      .expect(200)
  });
});


// Get theater - router
describe("POST /theaters/favorite", () => {
  data = {
    theatres: ['5938']
  }
  it("testing favorite theaters :", () => {
    return request(server)
      .post("/api/theatres/favorite?userId=1")
      .send([{
        location: {
          address: {
            street: "4200 North Third Ave.",
            state: "IN",
            city: "Evansville",
            country: "USA",
            postalCode: "47710"
          }
        }
      }
      ])
      .expect(201)
  });

  it("testing favorite theaters :", () => {
    return request(server)
      .post("/api/theatres/favorite?googleId=108599179916506132116")
      .send([{
        location: {
          address: {
            street: "4200 North Third Ave.",
            state: "IN",
            city: "Evansville",
            country: "USA",
            postalCode: "47710"
          }
        }
      }
      ])
      .expect(201)
  });
});


// Get theater - router
describe("GET /theaters/favorite", () => {
  data = {
    theatres: ['5938']
  }
  it("testing favorite theaters :", () => {
    return request(server)
      .get("/api/theatres/favorite?userId=1")
      .expect(200)
  });

  it("testing favorite theaters :", () => {
    return request(server)
      .get("/api/theatres/favorite?googleId=108599179916506132116")
      .expect(200)
  });
});