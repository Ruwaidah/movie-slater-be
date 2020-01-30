const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const { auth } = req.headers;

    if(auth) {
        const secret = process.env.JWT_SECRET;
        jwt.verify(auth, secret, function(err, decodedToken) {
            if(err) {
                res.status(401).json({ message: 'Invalid Token' });
            } else {
                req.token = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'Login required' })
    }
}