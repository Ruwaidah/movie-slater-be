const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("page 2");

  axios
    .get(
      `
    https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_APIKEY}&language=en-US&page=1&region=us`
    )
    .then(response => {
      console.log(response.data.total_pages);
      if (response.data.total_pages > 1) {
        axios
          .get(
            `
        https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_APIKEY}&language=en-US&page=2&region=us`
          )
          .then(respon => {
            res.status(200).json([response.data.results, respon.data.results]);
          });
      } else {
        res.status(200).json([response.data.results]);
      }
    })
    .catch(error => res.status(500).json({ message: "error geting Data" }));
});

module.exports = router;
