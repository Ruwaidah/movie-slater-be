const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const consumerRouter = require("../auth/consumer/consumer-router");
const validateUser = require("../auth/auth-helper");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/auth", validateUser, consumerRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "We live" });
});

module.exports = server;
