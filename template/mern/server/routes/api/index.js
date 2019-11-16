const express = require('express');
const router = express.Router();

const userController = require('./../../controllers/user.controller');

/* GET home page. */
router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;
