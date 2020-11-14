const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/superherospace'));

app.all('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/dist/superherospace/index.html'));
});

app.listen(process.env.PORT || 8080);