
var express = require('express');
var router = express.Router();
var Auth = require('../controllers/authController');

router.post('/login', Auth.post);

router.post('/register', Auth.add);

module.exports = router;

