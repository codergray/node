
var express = require('express');
var router = express.Router();
var Index = require('../controllers/indexController');
/* GET home page. */
router.get('/', Index.index);

module.exports = router;

