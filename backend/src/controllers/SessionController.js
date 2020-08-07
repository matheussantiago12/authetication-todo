const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth');

module.exports = {
    async register (req, res) {
        try {
            const { email, password } = req.body;

            if (await User.findOne({ email })) 
                return res.status(400).json({ error: 'User already exists' });
            
            const user = await User.create({
                email,
                password, 
            });

            user.password = undefined;

            const token = jwt.sign({
                id: user.id,
            }, 
            authConfig.secret, {
                // 1 dia
                expiresIn: 86400,
            });
            
            return res.json({ user, token });
        } catch (error) {
            return res.status(400).json({ error: 'Registration failed' });
        }
    },

    async authenticate (req, res) {
        try {
            const { email, password } = req.body;
            console.log(email);
            console.log(password);

            const user = await User.findOne({ email });

            if (!user)
                return res.status(400).json({ error: 'User not found' });

            if (!await bcrypt.compare(password, user.password))
                return res.status(400).json({ error: 'Invalid password' });

            user.password = undefined;

            const token = jwt.sign({
                id: user.id,
            }, 
            authConfig.secret, {
                // 1 dia
                expiresIn: 86400,
            });

            return res.json({ user, token });
        } catch (error) {
            return res.status(400).json({ error: 'Authentication failed' });
        }
    }
};