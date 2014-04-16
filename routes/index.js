var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'NodeExpress' });
});
//My codes
router.get('/this-article-is-really-foo', function (req, res, next) {
  res.render('foo', { title: "This is totally foo"});
});

module.exports = router;
