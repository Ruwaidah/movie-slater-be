const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  axios
    .get(
      `
    https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_APIKEY}&language=en-US&region=us`
    )
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(error => res.status(500).json({ message: "error geting Data" }));
});

module.exports = router;
