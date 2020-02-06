const router = require("express").Router();
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.OAUTH_CLIENT);
const Consumer = require("./oauth-consumer-model.js");

// Login With Google Oauth
router.post("/", (req, res) => {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.tokenObj.id_token,
      audience: process.env.OAUTH_CLIENT
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    if (userid) {
      Consumer.findBy(req.body.profileObj.email).then(consum => {
        if (consum) {
          res.status(200).json(consum);
        } else {
          Consumer.insert(req.body.profileObj).then(resp =>
            res.status(201).json(resp)
          );
        }
      });
    } else {
      res.status(500).json({ message: "error getting data" });
    }
  }
  verify().catch(console.error);
});

function middleWare(req, res, next) {
  if (req.body && req.body.tokenObj) next();
  else res.status(400).json({ message: "missing data" });
}

module.exports = router;
