const router = require("express").Router();
const Consumer = require("./auth-model.js");
const signToken = require("./generateToken.js")
const axios = require("axios")

// Login With Google Oauth
router.post("/", (req, res) => {
  axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.token}`)
    .then(response => {
      Consumer.findBy({ email: response.data.email }, "oauth_consumer")
        .then(consum => {
          if (!consum) {
            Consumer.add({ name: response.data.name, email: response.data.email, googleId: response.data.sub }, "oauth_consumer")
              .then(resp => res.status(201).json({ token: signToken(response.data), user: resp }))
            // .catch(error => res.status(500).json({ message: "error adding data" }));
          }
          else res.status(200).json({ token: signToken(consum), user: consum });
        })
      // .catch(error => res.status(500).json({ message: "error getting data" }));
    })
    .catch(error => res.status(401).json({ message: "invalid Token" }))
});

module.exports = router;
