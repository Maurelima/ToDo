const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
    res.send('TUCO CERTO COM A API, HA');
});

server.listen(3000, () => {
    console.log('API ONLINE');
});