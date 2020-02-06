const router = require("express").Router();
const Consumer = require("./oauth-consumer-model.js");
const axios = require("axios");

// Login With Google Oauth
router.post("/", (req, res) => {
  const { authorization } = req.headers;
  axios
    .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${authorization}`)
    .then(response => {
      Consumer.findBy(response.data.email)
        .then(consum => {
          if (consum) {
            res.status(200).json(consum);
          } else {
            Consumer.insert(response.data).then(resp =>
              res.status(201).json(resp)
            );
          }
        })
        .catch(error => console.log(error));
    });
});

module.exports = router;
