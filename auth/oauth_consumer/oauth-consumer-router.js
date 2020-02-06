const router = require("express").Router();
const Consumer = require("./oauth-consumer-model.js");
const axios = require("axios");

// Login With Google Oauth
router.get("/", (req, res) => {
  const { authorization } = req.headers;
  axios
    .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${authorization}`)
    .then(response => {
      Consumer.findBy(response.data.email)
        .then(consum => {
          if (!consum) {
            Consumer.add(response.data).catch(error =>
              res.status(500).json({ message: "error getting data" })
            );
          }
        })
        .catch(error =>
          res.status(500).json({ message: "error getting data" })
        );
      res.status(200).json({
        name: response.data.name,
        email: response.data.email,
        image: response.data.picture
      });
    })
    .catch(error => res.status(500).json({ message: "invalid token" }));
});

module.exports = router;
