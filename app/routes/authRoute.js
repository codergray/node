
var express = require('express');
var router = express.Router();
var Auth = require('../controllers/authController');

router.post('/', Auth.post);

router.post('/add', Auth.add);

module.exports = router;

