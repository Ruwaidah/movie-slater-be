const router = require("express").Router();
const Consumer = require("./oauth-consumer-model.js");
const axios = require("axios");
const restricted = require("./restricted-middleware.js");

// Login With Google Oauth
router.get("/", restricted, (req, res) => {
  const userInfo = req.user;
  Consumer.findBy(userInfo.email)
    .then(consum => {
      if (consum) res.status(200).json(consum);
      else
        Consumer.add(userInfo)
          .then(resp => res.status(201).json(resp))
          .catch(error =>
            res.status(500).json({ message: "error adding data" })
          );
    })
    .catch(error => res.status(500).json({ message: "error getting data" }));
});

module.exports = router;
