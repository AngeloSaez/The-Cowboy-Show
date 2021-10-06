var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Cowboy Show' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});

module.exports = router;