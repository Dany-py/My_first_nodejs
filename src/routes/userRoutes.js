
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.post('/email', userController.getUserByEmail);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
