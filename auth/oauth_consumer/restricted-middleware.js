const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const secret = process.env.OAUTH_CLIENT;
    jwt.verify(authorization, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({
          message: "invalid Token"
        });
      } else {
        console.log(decodedToken);
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({
      message: "Please Login and try again"
    });
  }
};

// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client(process.env.OAUTH_CLIENT);

// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;

//   async function verify() {
//     const ticket = await client.verifyIdToken({
//       idToken: authorization,
//       audience: process.env.OAUTH_CLIENT
//     });
//     const payload = ticket.getPayload();
//     const userid = payload["sub"];
//     req.user = payload;
//     next();
//   }
//   verify().catch(console.error);
// };
