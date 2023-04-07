const express = require('express');
const router = express();

const { registerUser } = require('../controllers/userController');

router.post('/register', registerUser);

module.exports = router;
