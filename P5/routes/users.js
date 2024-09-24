var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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

router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.send('special')
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err.toString());
})

module.exports = router;
