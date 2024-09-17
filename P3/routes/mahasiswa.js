const express = require('express');
const mahasiswaRouter = express.Router();

mahasiswaRouter
.route("/")
.get((req, res) => {
    res.send("Get data mahasiswa");
})

.post((req, res) => {
    res.send("post mahasiswa");
});

mahasiswaRouter.route("/:npm")
.put((req, res) => {
    res.send("put mahasiswa " + req.params.npm);
})
.delete((req, res) => {
    res.send("Delete mahaiswa "+ req.params.npm);
});

mahasiswaRouter.route("/kelas")
.get((req, res)=> {
    const kelas = req.query.idkelas
    res.send("Kelasnya adalah = "+ kelas);
})

module.exports = mahasiswaRouter