const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const consumerRouter = require("../auth/consumer/consumer-router");
const ownerRouter = require("../auth/owner/owner-router");
const movies = require("../movies/movies-router.js");
const upcoming = require("../movies/comingSoon-router.js");
const morgan = require("morgan");
const seatRouter = require("../seats/seats-router.js");
const oauth = require("../auth/oauth_consumer/oauth-consumer-router.js");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use("/api/auth", consumerRouter);
server.use("/api/auth/owner", ownerRouter);
server.use("/api/movies", movies);
server.use("/api/upcoming", upcoming);
server.use("/api/seats", seatRouter);
server.use("/api/oauth/login", oauth);

server.get("/", (req, res) => {
  res.status(200).json({ message: "We live" });
});

module.exports = server;
