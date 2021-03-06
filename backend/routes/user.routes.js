const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/user.controller');

router.route('/').post(signup);
router.route('/login').post(login);

module.exports = router;
