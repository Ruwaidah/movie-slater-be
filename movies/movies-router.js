const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  checkZip(req);
  checkDate(req);
  axios
    .get(
      `http://data.tmsapi.com/v1.1/movies/showings?startDate=${date}&zip=${zip}&api_key=${process.env.API_KEY}`
    )
    .then(respond => res.status(200).json(respond.data))
    .catch(error => res.status(500).json({ message: "error getting Data" }));
});

module.exports = router;

function checkZip(req) {
  if (req.query && req.query.zip) return (zip = req.query.zip);
  else return (zip = "90028");
}

function checkDate(req) {
  var day = new Date();
  var dd = String(day.getDate()).padStart(2, "0");
  var mm = String(day.getMonth() + 1).padStart(2, "0");
  var yyyy = day.getFullYear();
  day = yyyy + "-" + mm + "-" + dd;
  if (req.query && req.query.date) return (date = req.query.date);
  else return (date = day);
}
