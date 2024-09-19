const express = require('express');
const router = express.Router();

router.use("/",(req, res)=> {
    const data ={
        caption: "Mahasiswa",
        layout : "layout/main-layout",
        data :[
            {
                npm: "2226240021",
                nama: "Bronya"
            },
            {
                npm: "2226240022",
                nama: "Mei"
            },
            {
                npm: "2226240023",
                nama: "Kiana"
            }
        ]
    };
    res.render("index", data);
});

module.exports = router;