var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Router Middleware - Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Router Middleware - Request Type:', req.method)
  next()
});
router.get('/user', (req, res) => {
  res.send("Hello dari contoh router middleware");
});

module.exports = router;
