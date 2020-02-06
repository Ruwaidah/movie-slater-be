const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const consumerRouter = require("../auth/consumer/consumer-router");
const ownerRouter = require("../auth/owner/owner-router");
const movies = require("../movies/movies-router.js");
const morgan = require("morgan");
const seatRouter = require("../seats/seats-router.js");
const oauth = require("../auth/oauth_consumer/oauth-consumer-router.js");

const server = express();
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

server.use(helmet());
server.use(morgan("dev"));
server.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use("/api/auth", consumerRouter);
server.use("/api/auth/owner", ownerRouter);
server.use("/api/movies", movies);
server.use("/api/seats", seatRouter);
server.use("/api/login", oauth);

server.get("/", (req, res) => {
  res.status(200).json({ message: "We live" });
});

module.exports = server;
