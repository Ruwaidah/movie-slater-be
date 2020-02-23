const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const consumerRouter = require("../routes/auth/consumer-router.js");
const ownerRouter = require("../routes/auth/owner-router");
const movies = require("../routes/movies/movies-router.js");
const upcoming = require("../routes/movies/comingSoon-router.js");
const morgan = require("morgan");
const seatRouter = require("../routes/seats/seats-router.js");
const oauth = require("../routes/auth/oauth-consumer-router.js");
const image = require("../routes/auth/Profile-Image.js")
const fileupload = require("express-fileupload");

const server = express();

server.use(
  fileupload({
    useTempFiles: true
  })
);


server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use("/api/auth", consumerRouter);
server.use("/api/auth/owner", ownerRouter);
server.use("/api/movies", movies);
server.use("/api/upcoming", upcoming);
server.use("/api/seats", seatRouter);
server.use("/api/oauth", oauth);
server.use("/api/image", image)

module.exports = server;

server.get("/", (req, res) => {
  res.status(200).json({ message: "We live" });
});