const router = require("express").Router();
const Consumer = require("./oauth-consumer-model.js");
const restricted = require("./restricted-middleware.js");
const jwt = require("jsonwebtoken");

// Login With Google Oauth
router.get("/", restricted, (req, res) => {
  const userInfo = req.user;
  const token = signToken(userInfo);
  Consumer.findBy(userInfo.email)
    .then(consum => {
      if (consum) res.status(200).json({ token: token, user: consum });
      else
        Consumer.add(userInfo)
          .then(resp => res.status(201).json({ token: token, user: resp }))
          .catch(error =>
            res.status(500).json({ message: "error adding data" })
          );
    })
    .catch(error => res.status(500).json({ message: "error getting data" }));
});

function signToken(user) {
  const payload = {
    username: user.name
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
