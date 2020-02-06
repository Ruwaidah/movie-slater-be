const router = require("express").Router();
const Consumer = require("./oauth-consumer-model.js");
const restricted = require("./restricted-middleware.js");

// Login With Google Oauth
router.get("/", (req, res) => {
  // Consumer.findBy(req.user.email).then(consum => {
  //   if (consum) {
  //     res.status(200).json(consum);
  //   } else {
  //     Consumer.insert(req.user).then(resp => res.status(201).json(resp));
  //   }
  // });
  res.status(200).json({ message: "testing" });
});

module.exports = router;
