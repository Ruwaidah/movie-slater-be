const axios = require("axios");
const router = require("express").Router();
router.get("/", (req, res) => {
  checkZip(req);
  checkDate(req);
  axios
    .get(
      `http://data.tmsapi.com/v1.1/movies/showings?startDate=${date}&zip=${zip}&api_key=${process.env.API_KEY}`
    )
    .then(movies => {
      for (let i = 0; i < movies.data.length; i++) {
        Imagedata(movies.data[i].title)
          .then(res1 => {
            if (!res1.data.Poster || res1.data.Poster == "N/A") {
              movies.data[i].image =
                "https://res.cloudinary.com/donsjzduw/image/upload/v1580504817/hfjrl5wbkiugy4y0gmqu.jpg";
            } else {
              movies.data[i].image = res1.data.Poster;
            }
            if (i == movies.data.length - 1) {
              res.status(200).json(movies.data);
            }
          })
          .catch(error =>
            res.status(500).json({ message: "error geting Data" })
          );
      }
    })

    .catch(error => res.status(500).json({ message: "error geting Data" }));
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

function Imagedata(tittle) {
  return axios.get(
    `http://www.omdbapi.com/?t=${tittle}&apikey=${process.env.OM_API_KEY}`
  );
}
