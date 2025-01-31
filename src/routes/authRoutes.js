
const express = require('express');
const { registerUser, loginUser, refreshToken } = require('../controllers/authController');
const { createUser, deleteUser, getAllUsers, getUserById } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');
const { logout } = require('../services/authService');

const router = express.Router();

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);

// User routes
router.post('/users', authenticate, createUser);
router.delete('/users/:id', authenticate, deleteUser);
router.get('/users', authenticate, getAllUsers);
router.get('/users/:id', authenticate, getUserById);

module.exports = router;