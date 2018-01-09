var express = require('express');
var router = express.Router();
var getPallete = require("../lib/palette")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , palletes:getPallete()});
});

module.exports = router;
