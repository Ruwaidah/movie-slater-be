const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../auth/auth-router");
const validateUser = require("../auth/auth-helper");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/auth", validateUser, authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "We live" });
});

module.exports = server;
