
var express = require('express');
var router = express.Router();
var User = require('../controllers/userController');

router.get('/', User.index);
router.get('/list', User.list);

module.exports = router;

