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
      let i = 0;
      imageLoop();
      function imageLoop() {
        // set timeout on each request beacuse some images were getting skipped and not showing
        setTimeout(() => {
          Imagedata(movies.data[i].title, movies.data[i].releaseYear)
            .then(res1 => {
              if (!res1.data.Poster || res1.data.Poster == "N/A") {
                movies.data[i].image =
                  "https://res.cloudinary.com/donsjzduw/image/upload/v1580504817/hfjrl5wbkiugy4y0gmqu.jpg";
              } else {
                movies.data[i].image = res1.data.Poster;
              }
              if (i == movies.data.length - 1) {
                res.status(200).json(movies.data);
              } else {
                i++;
                console.log(i);
                imageLoop();
              }
            })
            .catch(error =>
              res.status(500).json({ message: "error geting Data" })
            );
        }, 1);
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

function Imagedata(title, year) {
  if (title == "Star Wars: The Rise of Skywalker") {
    console.log("star wars", title.includes(":"));
    title = "Star Wars";
  }

  if (title.includes(":")) {
    title = title.split(":")[0];
    console.log(title);
  }

  if (title == "The Gentlemen") {
    year = 2019;
  }
  console.log(year);
  return axios.get(
    `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=${process.env.OM_API_KEY}`
  );
}

const getMovies = async (date, zip) => {
  await axios
    .get(
      `http://data.tmsapi.com/v1.1/movies/showings?startDate=${date}&zip=${zip}&api_key=${process.env.API_KEY}`
    )
    .then(movies => {
      for (let i = 0; i < movies.data.length; i++) {
        Imagedata(movies.data[i].title, movies.data[i].releaseYear)
          .then(res1 => {
            if (!res1.data.Poster || res1.data.Poster == "N/A") {
              movies.data[i].image =
                "https://res.cloudinary.com/donsjzduw/image/upload/v1580504817/hfjrl5wbkiugy4y0gmqu.jpg";
            } else {
              movies.data[i].image = res1.data.Poster;
            }
            // if (i == movies.data.length - 1) {
            //   res1.status(200).json(movies.data);
            // }
          })
          .catch(error => {
            console.error(error);
            res.status(500).json({ message: "error geting Images" });
          });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: "error geting Movies" });
    });
};
