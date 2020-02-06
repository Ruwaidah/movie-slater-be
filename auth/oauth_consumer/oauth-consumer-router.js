const router = require("express").Router();
const Consumer = require("./oauth-consumer-model.js");
const axios = require("axios");
const restricted = require("./restricted-middleware.js");

// Login With Google Oauth
router.get("/", restricted, (req, res) => {
  Consumer.findBy(req.user.email)
    .then(consum => {
      if (consum) res.status(200).json(consum);
      else
        Consumer.add(req.user)
          .then(resp => res.status(201).json(resp))
          .catch(error =>
            res.status(500).json({ message: "error getting data" })
          );
    })
    .catch(error => console.log(error));
  // const { authorization } = req.headers;
  // axios
  //   .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${authorization}`)
  //   .then(response =>
  //     Consumer.findBy(response.data.email)
  //       .then(consum => {
  //         if (consum) res.status(200).json(consum);
  //         else
  //           Consumer.add(response.data)
  //             .then(resp => res.status(201).json(resp))
  //             .catch(error =>
  //               res.status(500).json({ message: "error getting data" })
  //             );
  //       })
  //       .catch(error => console.log(error))
  //   )
  //   .catch(error => res.status(500).json({ message: "error getting data" }));
});

module.exports = router;
