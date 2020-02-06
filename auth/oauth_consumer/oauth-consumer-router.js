const router = require("express").Router();
const { OAuth2Client } = require("google-auth-library");
const Consumer = require("./oauth-consumer-model.js");
const restricted = require("./restricted-middleware.js");

// Login With Google Oauth
router.get("/", (req, res) => {
  const client = new OAuth2Client(process.env.OAUTH_CLIENT);
  const { authorization } = req.headers;

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: authorization,
      audience: process.env.OAUTH_CLIENT
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    Consumer.findBy(payload.email).then(consum => {
      if (consum) {
        res.status(200).json(consum);
      } else {
        Consumer.insert(payload).then(resp => res.status(201).json(resp));
      }
    });
  }
  verify().catch(console.error);
});

module.exports = router;
