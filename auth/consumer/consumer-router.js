const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  const user = ({ email, password, username } = req.body);
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(registered => {
      const token = signToken(registered);
      res.status(201).json({
        user: {
          username: user.username,
          email: user.email
        },
        token: token
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error registering" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          token: token,
          user_id: user.id,
          email: user.email,
          message: `Welcome ${user.username}!`
        });
      } else {
        console.log(user);
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Login failed" });
    });
});

function signToken(user) {
  const payload = {
    username: user.username,
    id: user.id
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
