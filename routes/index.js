var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/search', (req, res, next) => {
  // TODO: Implement query from database
  res.json({ qt: req.query.qt })
})

module.exports = router;
