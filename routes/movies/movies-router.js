const axios = require("axios");
const router = require("express").Router();
router.get("/", (req, res) => {
  axios
    .get(`http://data.tmsapi.com/v1.1/movies/showings?startDate=${checkDate(req)}&zip=${checkZip(req)}&api_key=${process.env.API_KEY}`)
    .then(movies => {
      let i = 0;
      // set timeout on each request beacuse some images were getting skipped and not showing
      for (let i = 0; i < movies.data.length; i++) {
        setTimeout(() => {
          Imagedata(movies.data[i].title, movies.data[i].releaseYear)
            .then(res1 => {
              if (!res1.data.Poster || res1.data.Poster == "N/A") {
                movies.data[i].image = "https://res.cloudinary.com/donsjzduw/image/upload/v1580504817/hfjrl5wbkiugy4y0gmqu.jpg";
              } else {
                movies.data[i].image = res1.data.Poster;
                movies.data[i].maturityRating = res1.data.Ratings;
              }
              if (i == movies.data.length - 1)
                res.status(200).json(movies.data);
            })
          // .catch(error =>
          //   res.status(500).json({ message: "error geting Data" })
          // );
        }, 1);
      }
    })
  // .catch(error => res.status(500).json({ message: "error geting Data" }));
});

// Movie Details with TMDB API
router.post("/moviedetails", (req, res) => {
  let i = 1;
  let title = req.body.title;
  if (title.includes("(")) title = title.split("(")[0];
  getmovie(i);
  function getmovie(number) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_APIKEY}&language=en-US&query=${title}&page=${number}&include_adult=true`)
      .then(response => {
        let movie1 = response.data.results[0];
        if (response.data.results.length <= 0 && i <= 5) {
          i++;
          return getmovie(i);
        }
        axios.get(`https://api.themoviedb.org/3/movie/${movie1.id}/videos?api_key=${process.env.TMDB_APIKEY}&language=en-US`)
          .then(respo => {
            axios.get(`https://api.themoviedb.org/3/movie/${movie1.id}/credits?api_key=${process.env.TMDB_APIKEY}`)
              .then(casts => {
                const Directors = casts.data.crew.filter(direct => (direct.department == "Directing" && direct.job == "Director"));
                axios.get(`https://api.themoviedb.org/3/movie/${movie1.id}?api_key=${process.env.TMDB_APIKEY}&language=en-US`)
                  .then(moviedetail => {
                    res.status(200).json({
                      movie: movie1,
                      moviedetail: moviedetail.data,
                      casts: [casts.data.cast.slice(0, 4)],
                      directors: Directors,
                      videos: respo.data.results
                    });
                  })
                //     .catch(error =>
                //       res.status(200).json({
                //         movie: movie1,
                //         moviedetail: [],
                //         casts: [casts.data.cast.slice(0, 4)],
                //         videos: respo.data.results
                //       })
                //     );
              })
            //     .catch(error =>
            //       res.status(200).json({
            //         movie: movie1,
            //         moviedetail: [],
            //         casts: [],
            //         videos: respo.data.results
            //       })
            //     );
          })
        // .catch(error =>
        //   res.status(200).json({
        //     movie: movie1,
        //     moviedetail: [],
        //     casts: [],
        //     videos: []
        //   })
        // )
        // .catch(error =>
        //   res.status(500).json({ message: "error geting Data" })
        // );
      });
  }
});

module.exports = router;

function checkZip(req) {
  if (req.query && req.query.zip) return (zip = req.query.zip);
  return (zip = "47712");
}

function checkDate(req) {
  if (req.query && req.query.date) return (date = req.query.date);
  else {
    var dd = String(new Date().getDate()).padStart(2, "0");
    var mm = String(new Date().getMonth() + 1).padStart(2, "0");
    var yyyy = new Date().getFullYear();
    return (date = yyyy + "-" + mm + "-" + dd)
  };
}

function Imagedata(title, year) {
  if (title.includes(":"))
    title = title.split(":")[0];

  else if (title.includes("("))
    title = title.split("(")[0];

  else if (title == "The Gentlemen")
    year = 2019;

  return axios.get(
    `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=${process.env.OM_API_KEY}`
  );
}
