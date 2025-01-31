const jwt = require('jsonwebtoken');
const { register, login } = require('../services/authService');
const served = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        const user = await register(req, res);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const token = await login(req, res);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const refreshToken = async (req, res) => {
    const thisUser = await served.getUserByEmail(req.body.email);
    const refreshToken = thisUser.refreshToken;

    if (!refreshToken) return res.status(401).json({ error: 'Access denied, no token provided' });

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await served.getUserById(decoded.userId);
        
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ error: 'Invalid refresh token' });
        }

        res.status(200).json({ success: 'Token refreshed successfully' });
    } catch (error) {
        console.log(error);
        const newRefreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
        await served.updateUser(user.id, { refreshToken: newRefreshToken });
        res.status(400).json({ error: 'Invalid token', details: error.message });
    }
};

module.exports = { registerUser, loginUser, refreshToken };