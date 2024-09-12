const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
});
app.get('/about', (req, res) => {
    res.send('Halaman tentang perusahaan')
});
app.get('/contact', (req, res) => {
    res.send('Contact us at 1234567890')
});
app.listen(port, () => {
    console.log('Server started on port 3000');
});