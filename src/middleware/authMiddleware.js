const jwt = require('jsonwebtoken');
require('dotenv').config();
const served = require('../services/userService');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  let token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      try {
        const newAccess = await served.getUserByAccessToken(token);
        token = newAccess.refreshToken;
      } catch (innerError) {
        return res.status(401).json({ error: 'Invalid refresh token', details: innerError.message });
      }
    } else {
      return res.status(401).json({ error: 'Invalid token', details: error.message });
    }
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token', details: error.message });
  }
};


module.exports = { authenticate };
