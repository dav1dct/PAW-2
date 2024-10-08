var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('respond dari buku');
// });
const Buku = require("../model/buku")
//Format json
router.post('path', (req, res) => {
    const buku = new Buku({
        judul: req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre
    });

    console.log(Buku)
});


router.post('path', (req, res) => {
    res.status(201).json({
        message : "Data berhasil disimpan"
    });
});
module.exports = router;
