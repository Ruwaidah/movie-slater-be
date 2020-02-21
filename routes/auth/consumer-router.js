const router = require("express").Router();
const bcrypt = require("bcryptjs");
const validateUser = require("./auth-helper.js");
const signToken = require("./generateToken.js")
const Users = require("./auth-model.js");

router.post("/register", validateUser, (req, res) => {
  const user = ({ email, password, username } = req.body);
  user.password = bcrypt.hashSync(user.password, 8);
  Users.add(user, "consumer")
    .then(consumerreg => {
      res.status(201).json({
        user: {
          username: consumerreg.username,
          email: consumerreg.email
        },
        token: signToken(consumerreg)
      });
    })
    .catch(err => res.status(500).json({ message: "Error registering", error: err }));
});


router.post("/login", validateUser, (req, res) => {
  Users.findBy({ email: req.body.email }, "consumer")
    .then(consumer => {
      if (consumer && bcrypt.compareSync(req.body.password, consumer.password)) {
        res.status(200).json({
          token: signToken(consumer),
          user_id: consumer.id,
          email: consumer.email,
          username: consumer.username,
          message: `Welcome ${consumer.email}!`
        });
      } else res.status(401).json({ message: "Invalid Credentials" })
    })
    .catch(err => res.status(500).json({ message: "Login failed" }));
});




module.exports = router;

