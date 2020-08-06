const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth)
        return res.status(401).json({ error: 'No token provided' });

    const parts = auth.split(' ');

    if (!parts.length == 2)
        return res.status(401).json({ error: 'Invalid token format' });
    
    const [bearer, token] = parts;

    if (!/^Bearer$/i.test(bearer))
        return res.status(401).json({ error: 'Invalid token format' });

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err)
            return res.status(401).json({ error: 'Invalid token' });

        req.userId = decoded.id;
        return next();
    });
};