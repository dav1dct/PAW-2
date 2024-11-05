var express = require('express');
var router = express.Router();

const Bukucontroller = require("../controller/buku");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

//format JSON
router.post('/', Bukucontroller.createBuku);

router.get('/', Bukucontroller.readBuku);

router.delete('/:id', Bukucontroller.deleteBuku);

router.put('/:id', Bukucontroller.updateBuku);

module.exports = router;
