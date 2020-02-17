const router = require("express").Router();
const bcrypt = require("bcryptjs");
const validateUser = require("./auth-helper.js");
const signToken = require("./generateToken.js")
const Owner = require("./auth-model.js");

router.post("/register", validateUser, (req, res) => {
  const user = ({ email, password, username } = req.body);
  user.password = bcrypt.hashSync(user.password, 8);
  Owner.add(user, "owner")
    .then(registered => {
      res.status(201).json({
        user: {
          username: user.username,
          email: user.email
        },
        token: signToken(registered)
      });
    })
  // .catch(err => res.status(500).json({ message: "Error registering" }));
});

router.post("/login", validateUser, (req, res) => {
  Owner.findBy({ email: req.body.email }, "owner")
    .then(user => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).json({
          token: signToken(user),
          user_id: user.id,
          email: user.email,
          username: user.username,
          message: `Welcome ${user.username}!`
        });
      } else res.status(401).json({ message: "Invalid Credentials" });
    })
  // .catch(err => res.status(500).json({ message: "Login failed" }));
});



module.exports = router;
